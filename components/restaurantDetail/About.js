import React from 'react'
import { View, Text, Image } from 'react-native'

const yieldRestaurantInfo = {
  name: 'Farmhouse Kitchen Thai Cuisine',
  image: "https://media-cdn.tripadvisor.com/media/photo-s/02/4e/cc/7a/brasserie-au-dauphin.jpg",
  price: "$$",
  reviews: "1500",
  rating: 4.5,
  categories: [
    {title:"cook"},
    {title:"indian"},
    {title:"african"},
    {title:"asian"},
    {title:"snack"},
  ],
};

// const image = "https://media-cdn.tripadvisor.com/media/photo-s/02/4e/cc/7a/brasserie-au-dauphin.jpg"

// const title = 'Farmhouse Kitchen Thai Cuisine'

// const description = 'Thai • Confort Food • $$ • 🎫 • 4 ⭐ (2913+)'



export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
  props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join( '•' );

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
