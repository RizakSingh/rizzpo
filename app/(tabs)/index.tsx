import { Link } from "expo-router";
import "@/global.css"
import { Text, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 
export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/(tabs)/insights">
        <Text className="text-blue-500 underline">View Subscription</Text>
      </Link>
    </SafeAreaView>
  );
}