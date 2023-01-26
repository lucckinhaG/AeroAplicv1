import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home';
import Calcular from '../pages/Calcular';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Calcular"
            component={Calcular}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}