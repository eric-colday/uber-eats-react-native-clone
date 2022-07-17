import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
    localRestaurants,
} from "../components/home/RestaurantItems";

// const YELP_API_KEY = "R49YQyYivJoW3U1KqFSaTwODuSOSSoo0vapVHWjKV72BNy9_RM_dtulVdfPfQLxy4ki4APsibs1fGwYQ16rIgGoMVSXaEqxZOk01f0-5qZ9PlIAMhvGSfoXuwmLUYnYx";



const Home = (navigation) => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Strasbourg`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(json.businesses));
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems
                    restaurantData={restaurantData}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
