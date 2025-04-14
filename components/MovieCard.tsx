import { Text, View, TouchableOpacity, Image } from "react-native";
import { Movie } from "@/interfaces/interfaces";
import { icons } from "@/constants/icons";
import { Link } from "expo-router";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard(props: MovieCardProps) {
  const { movie } = props;
  const image_url: string = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/600*400/1a1a1a/ffffff.png";
  return (
    <Link href={`/movies/${movie.id}`} asChild>
      <TouchableOpacity className={"w-[8rem]"}>
        <Image
          source={{ uri: image_url }}
          className={"w-full h-52 rounded-lg"}
          resizeMode={"cover"}
        />
        <Text className={"text-white text-sm mt-1 font-bold"} numberOfLines={1}>
          {movie.title}
        </Text>
        <View className={"flex justify-between flex-row"}>
          <View className={"flex justify-start flex-row text-sm mt-1"}>
            {Array.from({ length: movie.vote_average / 2 }).map((_, index) => (
              <Image source={icons.star} key={index} className={"h-3 w-3"} />
            ))}
          </View>
          <Text className={"text-white text-light-200"}>Movie</Text>
        </View>
        <Text className={"text-white text-sm text-light-200"}>
          {movie.release_date.split("-")[0]}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}
