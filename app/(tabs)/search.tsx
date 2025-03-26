import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { MovieCard } from "@/components/MovieCard";
import { Movie } from "@/interfaces/interfaces";
import { useFetch } from "@/hooks/useFetch";
import { MovieService } from "@/services/movie.api";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const movieService = new MovieService();
  const {
    data: moviesData,
    loading: moviesLoading,
    error: moviesError,
    refetch: moviesRefetch,
  } = useFetch(movieService.getMovies(searchQuery));

  useEffect(() => {
    if (searchQuery) {
      setTimeout(() => {
        moviesRefetch();
      }, 500);
    } else {
    }
  }, [searchQuery]);
  return (
    <View className={"flex-1 bg-primary"}>
      <Image source={images.bg} className={"absolute w-full z-0"} />
      <Image source={icons.logo} className={"w-12 h-10 mx-auto mt-20 mb-5"} />
      {moviesLoading ? (
        <ActivityIndicator
          size={"large"}
          color={"#0000ff"}
          className={"mt-10 self-center"}
        />
      ) : moviesError ? (
        <Text>Error: {moviesError.message}</Text>
      ) : (
        <View>
          <FlatList
            data={moviesData}
            renderItem={({ item }) => <MovieCard movie={item as Movie} />}
            scrollEnabled={false}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              paddingRight: 5,
              marginBottom: 10,
              gap: 20,
              width: "100%",
            }}
            className={"mt-2 pb-32 w-full"}
            ListHeaderComponent={
              <>
                <View className={"flex-1 mt-5 mb-2"}>
                  <SearchBar
                    placeholder={"Search for a movie"}
                    onPress={() => {}}
                    onChangeText={(text: string) => setSearchQuery(text)}
                    value={searchQuery}
                  />
                </View>
                {searchQuery ? (
                  <Text className={"text-white mt-2 mb-2 text-xl font-bold"}>
                    Search Result For:
                    <Text className={"text-[#D1C0FF]"}> {searchQuery}</Text>
                  </Text>
                ) : null}
              </>
            }
          />
        </View>
      )}
    </View>
  );
}
export default Search;
