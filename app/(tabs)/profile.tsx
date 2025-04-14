import { Image, Text, View } from "react-native";
import { icons } from "@/constants/icons";

function Profile() {
  return (
    <View className={"flex flex-1 bg-primary"}>
      <View className={"flex justify-center w-full h-full items-center"}>
        <Image
          source={icons.person}
          tintColor={"white"}
          className={"w-10 h-10"}
        />
        <Text className={"text-white mt-3 text-2xl"}>Profile</Text>
      </View>
    </View>
  );
}

export default Profile;
