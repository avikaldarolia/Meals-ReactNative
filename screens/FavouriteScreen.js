import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
// import { FavouritesContext } from "../store/context/favourites-context";

function FavouritesScreen() {
    // const favouriteMealsCtx = useContext(FavouritesContext);
    const favouriteMealIds = useSelector(state => state.favouriteMeals.ids)
    const favouriteMeals = MEALS.filter(meal => favouriteMealIds.includes(meal.id))

    if (favouriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>
                    You have no favourite meals yet.
                </Text>
            </View>
        )
    }

    return (
        <MealsList items={favouriteMeals} />
    )
}

export default FavouritesScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }

})