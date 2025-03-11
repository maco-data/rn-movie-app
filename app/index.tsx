import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-light-300 font-bold">MACO</Text>
        <Link href="/onboarding">Onboarding</Link>
        <Link href="/movies/avengers">Avenger Movie</Link>
    </View>
  );
}
