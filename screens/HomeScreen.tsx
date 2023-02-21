import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

interface Invoice {
  name: string;
}

const invoices: Invoice[] = [
  {
    name: "1234 Chestnut",
  },
  {
    name: "4567 Union",
  },
  {
    name: "8910 Hyde",
  },
  {
    name: "4321 Laguna",
  },
  {
    name: "4613 Mission",
  },
  {
    name: "9888 Market",
  },
  {
    name: "6699 Service",
  },
  {
    name: "0099 Broadway",
  },
];

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="bg-primary-blue h-screen ">
      <View className="flex-row justify-end">
        <Image source={require("../assets/top-waves.png")} />
      </View>
      <View className="flex-row p-4 justify-between">
        <Text className="text-white text-2xl font-semibold">Hi, Jose!</Text>
        <View className="flex-row items-center bg-primary-blue-400 p-2 rounded px-3 border-2 border-primary-blue-600">
          <Image
            source={require("../assets/ups_logo.png")}
            className="h-7 w-7 mx-2"
          />
          <Text className="text-white">UPS</Text>
        </View>
      </View>
      <View className="h-screen">
        <View className="flex-1 bg-card-white rounded-t-xl p-4">
          <View className="flex-row justify-between">
            <Text>Invoices to Sign Today</Text>
            <View className="flex-row">
              <Image
                source={require("../assets/calendar.png")}
                className="h-4 w-4 mx-2"
              />
              <Text>Jan 28</Text>
            </View>
          </View>
          <View className="pt-4">
            {invoices.map((invoice: Invoice) => {
              return (
                <View className="bg-white flex-row justify-between rounded-lg mt-4 p-2">
                  <Text className="text-xl">{invoice.name}</Text>
                  <Image
                    source={require("../assets/signature.png")}
                    className="h-8 w-8 mx-2"
                  />
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
