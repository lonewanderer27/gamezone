import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from "./home";
import AboutStack from "./about";

const Tab = createBottomTabNavigator();

function TabsNav() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="About" component={AboutStack} />
        </Tab.Navigator>
    )
}

export default TabsNav;