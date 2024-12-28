import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useState, useRef } from "react";
import onboarding from "@/constants";
import { Image } from "react-native";
import CustomButton from "@/components/CustomButton";

const welcome = () => {
  const SwiperRef = useRef<Swiper>(null);
  const [activeindex, Setactiveindex] = useState(0);
  const isLastSlide = activeindex === onboarding.length - 1;
  return (
    <SafeAreaView className="h-full w-full bg-black">
      <View className="p-5 flex flex-row justify-end">
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/sign-up");
          }}
        >
          <View className="flex flex-row items-center space-x-2">
            <Text className="text-xl text-slate-300">Skip</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Swiper
        ref={SwiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => Setactiveindex(index)}
      >
        {onboarding.map((item, index) => (
          <View key={index} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-[87%] h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-[#858585] text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-md font-JakartaSemiBold text-center text-white mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : SwiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10 mb-5"
      />
    </SafeAreaView>
  );
};

export default welcome;
