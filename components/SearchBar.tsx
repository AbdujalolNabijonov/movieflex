import { Image, View, TextInput } from "react-native";
import { icons } from "@/constants/icons";

interface SearchBarProps {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (value: string) => void;
}

function SearchBar({
  placeholder,
  onPress,
  value,
  onChangeText,
}: SearchBarProps) {
  return (
    <View
      className={"flex-row items-center bg-dark-200 rounded-full py-4 px-5 "}
    >
      <Image
        source={icons.search}
        className={"size-5"}
        resizeMode={"contain"}
        tintColor={"#ab8bff"}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#ab8bff"}
        onChangeText={onChangeText}
        onPress={onPress}
        value={value}
        className={"flex-1 text-white ml-3"}
      />
    </View>
  );
}

export default SearchBar;
