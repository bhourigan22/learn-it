import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';

export default function RootLayout() {

    useFonts({
        'raleway':require('./../assets/fonts/Raleway-Regular.ttf'),
        'raleway-bold':require('./../assets/fonts/Raleway-Bold.ttf'),
    })

    return (
        <Stack screenOptions={{
            headerShown:false,
        }}>
        
        </Stack>
    );
}