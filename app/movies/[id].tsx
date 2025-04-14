import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { MovieService } from "@/services/movie.api";
import { useEffect, useState } from "react";
import { MovieDetails } from "@/interfaces/interfaces";
import { icons } from "@/constants/icons";

function Details() {
  const { id } = useLocalSearchParams();
  const movieService = new MovieService();
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    if (id) {
      movieService
        .getTargetMovie(id as string)
        .then((data) => setMovie(data as MovieDetails))
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <View className={"flex-1 bg-primary"}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className={"w-full h-[550px]"}
            resizeMode={"stretch"}
          />
          <View className={"m-4"}>
            <Text className={"text-white font-bold text-2xl"}>
              {movie?.title}
            </Text>
            <View
              className={
                "flex flex-row align-middle items-center gap-4 mt-3 text-xl"
              }
            >
              <Text className={"text-light-200"}>
                {movie?.release_date.split("-")[0]}
              </Text>
              <Text className={"h-1 w-1 bg-gray-300 rounded-full"}></Text>
              <Text className={"text-light-200"}>
                {movie?.original_language}
              </Text>
              <Text className={"h-1 w-1 bg-gray-300 rounded-full"}></Text>
              <Text className={"text-light-200"}>{movie?.runtime}m</Text>
            </View>
            <View className={"mt-4"}>
              <View
                className={
                  "flex flex-row items-center gap-2 bg-[#221F3D] rounded-lg p-2 w-[170px] justify-center"
                }
              >
                <Image source={icons.star} />
                <Text>
                  <Text className={"text-white font-bold"}>
                    {Math.round(movie?.vote_average as number)}
                  </Text>
                  <Text className={"text-light-200"}>
                    /10 (
                    {movie?.vote_count && movie?.vote_count > 1000
                      ? `${Math.round(movie?.vote_count / 1000)}k`
                      : movie?.vote_count}
                    votes)
                  </Text>
                </Text>
              </View>
            </View>
            <View className={"mt-6"}>
              <Text className={"text-light-200"}>Overview</Text>
              <Text
                className={"text-white mt-2 tracking-wider leading-relaxed"}
              >
                {movie?.overview}
              </Text>
            </View>
            <View className={"flex flex-row mt-4"}>
              <View className={"flex-1"}>
                <Text className={"text-light-200"}>Realeased date</Text>
                <Text className={"text-white mt-2 font-bold"}>
                  {movie?.release_date}
                </Text>
              </View>
              <View className={"flex-1"}>
                <Text className={"text-light-200"}>Status</Text>
                <Text className={"text-white mt-2 font-bold"}>
                  {movie?.status}
                </Text>
              </View>
            </View>
            <View className={"mt-5"}>
              <Text className={"text-light-200"}>Genres</Text>
              <View className={"flex flex-row gap-2 mt-3"}>
                {movie?.genres.map((genre, index) => (
                  <Text
                    key={index}
                    className={
                      "text-white bg-[#221F3D] p-2 rounded-lg font-bold"
                    }
                  >
                    {genre.name}
                  </Text>
                ))}
              </View>
            </View>
            <View className={"mt-5"}>
              <Text className={"text-light-200"}>Countries</Text>
              <View className={"flex flex-row gap-2 mt-2 items-center"}>
                {movie?.production_countries.map((country, index) => (
                  <View
                    key={index}
                    className={"flex flex-row gap-2 items-center"}
                  >
                    <Text className={"text-label font-bold"}>
                      {country.name}
                    </Text>
                    <Text className={"h-1 w-1 bg-gray-300 rounded-full"}></Text>
                  </View>
                ))}
              </View>
            </View>
            <View className={"flex flex-row mt-4"}>
              <View className={"flex-1"}>
                <Text className={"text-light-200"}>Budget</Text>
                <Text className={"text-white mt-2 font-bold"}>
                  {movie?.budget
                    ? `$${Math.round(movie?.budget / 1000000)} Million`
                    : "N/A"}
                </Text>
              </View>
              <View className={"flex-1"}>
                <Text className={"text-light-200"}>Revenue</Text>
                <Text className={"text-white mt-2 font-bold"}>
                  {movie?.revenue
                    ? `$${Math.round(movie?.revenue / 1000000)} Million`
                    : "N/A"}
                </Text>
              </View>
            </View>
            <View className={"mt-5"}>
              <Text className={"text-light-200"}>Tagline</Text>
              <Text className={"text-white mt-2 font-bold"}>
                {movie?.tagline}
              </Text>
            </View>
            <View className={"mt-5"}>
              <Text className={"text-light-200"}>Production Companies</Text>
              <View className={"flex flex-row gap-2 mt-2 items-center"}>
                {movie?.production_companies.map((company, index) => (
                  <View
                    key={index}
                    className={"flex flex-row gap-2 items-center"}
                  >
                    <Text className={"text-label font-bold"}>
                      {company.name}
                    </Text>
                    <Text className={"h-1 w-1 bg-gray-300 rounded-full"}></Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        className="flex justify-center flex-row gap-2 py-4 rounded-lg items-center"
        style={{ backgroundColor: "#AB8BFF", margin: 20, padding: 0 }}
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-base font-bold">
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Details;
