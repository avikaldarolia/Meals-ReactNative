import { useContext, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data"
import { FavouritesContext } from "../store/context/favourites-context";

function MealDetailScreen({ route, navigation }) {
    const favouriteMealsCtx = useContext(FavouritesContext);
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id == mealId)

    const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId)

    function changeFavoriteStatusHandler() {
        if (mealIsFavourite) {
            favouriteMealsCtx.removeFavourite(mealId)
        }
        else {
            favouriteMealsCtx.addFavourite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavourite ? 'star' : "star-outline"}
                        color="white"
                        onPress={changeFavoriteStatusHandler}
                    />
                )
            }
        })
    }, [navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails textStyle={styles.detailText} duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        margin: 8,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%',
    }
})
{/* <View style={styles.detais}>
    <Text style={styles.detailItem}>{duration}m</Text>
    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
</View> */}