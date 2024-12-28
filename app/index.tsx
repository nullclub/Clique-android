import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const index = () => {
  return (
    <View className="bg-black h-full w-full">
      <Redirect href="/(auth)/welcome" />
    </View>
  );
};

export default index;
