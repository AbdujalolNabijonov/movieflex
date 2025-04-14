import { Image, Text, View } from "react-native";
import { icons } from "@/constants/icons";

function Saved() {
  return (
    <View className={"flex flex-1 bg-primary"}>
      <View className={"flex justify-center w-full h-full items-center"}>
        <Image
          source={icons.save}
          tintColor={"white"}
          className={"w-10 h-10"}
        />
        <Text className={"text-white mt-3 text-2xl"}>Save</Text>
      </View>
    </View>
  );
}

export default Saved;
