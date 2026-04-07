import { Tabs } from "expo-router";
import { tabs } from "../../constants/data";
const Tablayout = ()=>(

  <Tabs screenOptions={{ headerShown: false }}>
    {tabs.map((tab) => (
      <Tabs.Screen
        key={tab.name}
        name={tab.name}
        options={{ title: tab.title, tabBarIcon: tab.icon }}
      />
    ))}
  </Tabs>
)
export default Tablayout 