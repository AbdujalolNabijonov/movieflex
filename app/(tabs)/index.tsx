import {Image, Text, View, ScrollView, ActivityIndicator, FlatList} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import {useRouter} from "expo-router";
import {useFetch} from "@/hooks/useFetch"
import {MovieService} from "@/services/movie.api"
import {MovieCard} from "@/components/MovieCard";
import {Movie} from "@/interfaces/interfaces";

export default function Index() {
    const router = useRouter()
    const movieService = new MovieService()
    const {
        data:moviesData,
        loading:moviesLoading,
        error:moviesError,
    }=useFetch(movieService.getMovies(""))

    return (
    <View className={"flex-1 bg-primary"}>
        <Image source={images.bg} className={"absolute w-full z-0"}/>
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{minHeight:"100%", paddingBottom:10}}
        >
            <Image source={icons.logo} className={"w-12 h-10 mx-auto mt-20 mb-5"}/>
            {moviesLoading?
                (
                <ActivityIndicator
                    size={"large"}
                    color={"#0000ff"}
                    className={"mt-10 self-center"}
                />
            ):
                moviesError?
                (
                  <Text>
                      Error: {moviesError.message}
                  </Text>
                ):
                    (
                        <View>
                            <View className={"flex-1 mt-5"}>
                                <SearchBar
                                    placeholder={"Search for a movie"}
                                    onPress={()=>{router.push("/search")}}
                                />
                            </View>
                            <>
                                <Text className={"text-white mt-3 mb-3 font-bold"}>LATEST MOVIES</Text>
                                <FlatList
                                    data={moviesData}
                                    renderItem={({item})=>(
                                        <MovieCard movie={item as Movie}/>
                                    )}
                                    scrollEnabled={false}
                                    keyExtractor={(item)=>item.id.toString()}
                                    numColumns={3}
                                    columnWrapperStyle={{
                                        justifyContent:"flex-start",
                                        paddingRight:5,
                                        marginBottom:10,
                                        gap:20,
                                        width:"100%"
                                    }}
                                    className={"mt-2 pb-32 w-full"}
                                />
                            </>
                        </View>
                    )
            }
        </ScrollView>
    </View>
  );
}
