import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../pages/About";
import HomeStack from "./home";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function AboutStack() {
    return (
        <Stack.Navigator initialRouteName="About" screenOptions={{
            headerStyle: {
                backgroundColor: '#eee',
            },
            headerTintColor: '#444',
        }}>
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

export default AboutStack;