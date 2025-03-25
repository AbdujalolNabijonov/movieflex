import {Tabs} from "expo-router"
import {Image, ImageBackground, Text, View} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import {TabIconInterface} from "@/interfaces/interfaces";


const TabIcon = (props:TabIconInterface)=>{
    const {focused, title, icon} = props
    if(focused){
        return(
            <ImageBackground
                source={images.highlight}
                className="flex-1 min-w-[110px] mt-8 flex-row items-center justify-center overflow-hidden rounded-full w-full min-h-16 transition-background duration-200"
            >
                <Image source={icon} tintColor={"#151312"} className={"size-5"}/>
                <Text className={"font-bold text-secondary text-base ml-2"}>{title}</Text>
            </ImageBackground>
        )
    }else{
        return (
            <View
                className={'size-full justify-center items-center rounded-full mt-8'}
            >
                <Image source={icon} tintColor={"#A8B5DB"} className={"size-5"}/>
            </View>
        )
    }
}

function Layout(){
    return(
        <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarIconStyle:{
                width:"100%",
                height:"100%",
                justifyContent:"center",
                alignItems:"center"
            },
            tabBarStyle:{
                backgroundColor:"#0f0d23",
                borderRadius:50,
                marginHorizontal:10,
                marginBottom:36,
                height:50,
                position:"absolute",
                overflow:"hidden",
                borderWidth:1,
                borderColor:"transparent",
            }

        }}
        >
            <Tabs.Screen
            name={"index"}
            options={{
                title: "Home",
                headerShown:false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                        focused={focused}
                        icon={icons.home}
                        title={"Home"}
                    />
                )
            }}
            />
            <Tabs.Screen
            name={"search"}
            options={{
                title: "Search",
                headerShown:false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                        focused={focused}
                        icon={icons.search}
                        title={"Search"}
                    />
                )
            }}

            />
            <Tabs.Screen
            name={"saved"}
            options={{
                title: "Saved",
                headerShown:false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                        focused={focused}
                        icon={icons.save}
                        title={"Saved"}
                    />
                )
            }}
            />
            <Tabs.Screen
                name={"profile"}
                options={{
                    title: "Profile",
                    headerShown:false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.person}
                            title={"Profile"}
                        />
                    )
                }}
            />
        </Tabs>
    )
}
export default Layout