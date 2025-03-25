import {Image, Text, View, ScrollView, ActivityIndicator} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import {useRouter} from "expo-router";
import {useFetch} from "@/hooks/useFetch"
import {MovieService} from "@/services/movie.api"

export default function Index() {
    const router = useRouter()
    const movieService = new MovieService()
    const {
        data:movies,
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
                            <Text className={"text-white font-bold mt-5"}>LATEST MOVIES</Text>
                            </>
                        </View>
                    )
            }
        </ScrollView>
    </View>
  );
}
