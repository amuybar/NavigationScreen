import { View, StyleSheet } from "react-native";
import { Link , Stack 
    
} from "expo-router";

export default function NotFoundPage() {
    return (
       <>
            <Stack.Screen options={{ title: "Opps Page not Found" }} />
            <View>
             <Link href={"/"}>Go Back Home</Link>
            </View>
        </>
    )
}