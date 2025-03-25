import {Image, View, TextInput} from "react-native";
import {icons} from "@/constants/icons";

interface  SearchBarProps {
    placeholder:string;
    onPress?:()=>void
}


function SearchBar({placeholder, onPress}: SearchBarProps) {
    return(
        <View className={"flex-row items-center bg-dark-200 rounded-full py-4 px-5 "}>
            <Image source={icons.search} className={"size-5"} resizeMode={"contain"} tintColor={"#ab8bff"}/>
            <TextInput
            placeholder={placeholder}
            placeholderTextColor={"#ab8bff"}
            onChangeText={()=>{}}
            onPress={onPress}
            className={"flex-1 text-white ml-3"}
            />
        </View>
    )
}

export  default SearchBar