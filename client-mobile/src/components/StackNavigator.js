import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./Detail";
import Search from "../screens/Search"

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="SearchScreen" component={Search} />
            <Stack.Screen name="Detail" component={Detail} />

        </Stack.Navigator>

    )
}