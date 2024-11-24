import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";

export default function index() {
  // const [isonboarding, setIsOnboarding] = useState(false);
  // useEffect(() => {
  //   setIsOnboarding(true);
  // }, []);
  return <Redirect href="/(routes)/onboarding" />;
}
