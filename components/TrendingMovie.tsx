import { Image, Text, TouchableOpacity, View } from "react-native";
import { TrendingCardProps } from "@/interfaces/interfaces";
import MaskedView from "@react-native-masked-view/masked-view";
import { images } from "@/constants/images";
import { Link } from "expo-router";

const TrendingMovie = (props: TrendingCardProps) => {
  const { movie, index } = props;
  const image_url: string = movie.poster_url
    ? movie.poster_url
    : "https://placehold.co/600*400/1a1a1a/ffffff.png";
  return (
    <Link href={`/movies/${movie.movie_id}`} asChild>
      <TouchableOpacity className={"w-32 relative pl-5"}>
        <Image
          source={{ uri: image_url }}
          className={"w-full h-48 rounded-lg"}
          resizeMode={"cover"}
        />
        <View className={"absolute top-32 -left-3.5 rounded-full px-2 py-1"}>
          <MaskedView
            maskElement={
              <Text className={"text-white text-6xl font-bold"}>{index}</Text>
            }
          >
            <Image
              source={images.rankingGradient}
              resizeMode={"cover"}
              className={"size-14"}
            />
          </MaskedView>
        </View>
        <Text className={"text-white mt-1 text-light-200"} numberOfLines={2}>
          {movie.title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingMovie;
