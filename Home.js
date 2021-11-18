import React from "react";
import { View } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Home(params) {
    const myitems = [
        {
            id: 1,
            title: 'Chicken and chips',
            image: require ('../assets/images/food1.jpg'),
            price: 25,
        },
        {
            id: 2,
            title: 'Indonesian food',
            image: require ('../assets/images/food2.jpg'),
            price: 30,
        },
        {
            id: 3,
            title: 'Plain rice and chicken',
            image: require ('../assets/images/food3.jpg'),
            price: 25,
        },
        {
            id: 4,
            title: 'Rice and chicken',
            image: require ('../assets/images/food4.jpg'),
            price: 20,
        },
    ]
  return (
    <View
      style={{
        backgroundColor: "orange",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <AntDesign name="search1" size={20} color="black" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>
      </View>
    </View>
  );
}