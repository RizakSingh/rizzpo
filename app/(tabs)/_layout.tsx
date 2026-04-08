import { Image ,View} from "react-native";
import { Tabs } from "expo-router";
import { tabs } from "../../constants/data";
import{ colors,components} from "../../constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const tabBar = components.tabBar
const Tablayout = () => {
  const insets = useSafeAreaInsets();
 const TabIcon = ({ focused, icon }: TabIconProps) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          backgroundColor: focused ? "#FF7A00" : "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={icon} style={{ width: 22, height: 22 }} resizeMode="contain" />
      </View>
    </View>
  );
};

  return (
    <Tabs
    screenOptions={{
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: Math.max(insets.bottom, tabBar.horizontalInset),
    height: tabBar.height,
    marginHorizontal: tabBar.horizontalInset,
    borderRadius: tabBar.radius,
    backgroundColor: colors.primary,
    borderTopWidth: 0,
    elevation: 0
  },
  tabBarItemStyle: {
    paddingVertical: tabBar.height/2 - tabBar.iconFrame/2.5,
    width: tabBar.iconFrame,
    height: tabBar.iconFrame,
    alignItems: "center",
  },
}}>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default Tablayout;
