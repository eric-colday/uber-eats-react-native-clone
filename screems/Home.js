import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
    localRestaurants,
} from "../components/home/RestaurantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";


const YELP_API_KEY = "R49YQyYivJoW3U1KqFSaTwODuSOSSoo0vapVHWjKV72BNy9_RM_dtulVdfPfQLxy4ki4APsibs1fGwYQ16rIgGoMVSXaEqxZOk01f0-5qZ9PlIAMhvGSfoXuwmLUYnYx";



const Home = () => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("Strasbourg");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            // probleme à resoudre ci-dessous
            .then((json) =>
                setRestaurantData(
                    json.businesses
            )
      );
    }

    // .filter((business) =>
    //business.transactions.includes(activeTab.toLowerCase()) )

    useEffect(() => {
        getRestaurantsFromYelp(); 
    }, [city, activeTab]);
    

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems
                    restaurantData={restaurantData}
                />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
};

export default Home;
