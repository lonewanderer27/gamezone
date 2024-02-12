import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from "./home";
import AboutStack from "./about";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function TabsNav() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle:{
                height: 60,
                paddingBottom: 10
            }
        }}>
            <Tab.Screen name="GameZone" component={HomeStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="games" size={size} color={color} />
                )
            }} />
            <Tab.Screen name="About" component={AboutStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="info" size={size} color={color} />
                )
            }} />
        </Tab.Navigator>
    )
}

export default TabsNav;