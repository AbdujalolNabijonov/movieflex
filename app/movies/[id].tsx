import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";

function Details(){
    const {id} = useLocalSearchParams()
    return(
        <View>
            <Text>Movie Name:{id}</Text>
        </View>
    )
}

export  default  Details