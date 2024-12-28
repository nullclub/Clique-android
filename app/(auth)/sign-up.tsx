import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import * as yup from "yup";
import { router } from "expo-router";

const signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView className="flex-1 bg-black px-6 py-10 justify-center">
      <Text className="text-white text-3xl font-bold mb-6">Sign Up</Text>
      <View className="mb-4">
        <Text className="text-gray-400 mb-2">Username</Text>
        <TextInput
          className="bg-gray-800 text-white p-3 rounded-lg"
          placeholder="Enter your username"
          placeholderTextColor="#7f8c8d"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View className="mb-4">
        <Text className="text-gray-400 mb-2">Email</Text>
        <TextInput
          className="bg-gray-800 text-white p-3 rounded-lg"
          placeholder="Enter your email"
          placeholderTextColor="#7f8c8d"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View className="mb-6">
        <Text className="text-gray-400 mb-2">Password</Text>
        <TextInput
          className="bg-gray-800 text-white p-3 rounded-lg"
          placeholder="Enter your password"
          placeholderTextColor="#7f8c8d"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity className="bg-blue-600 p-3 rounded-lg mb-4">
        <Text className="text-white text-center font-semibold">Sign Up</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center mt-4">
        <Text className="text-white">Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/sign-in");
          }}
        >
          <Text className="text-blue-400">Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default signup;
