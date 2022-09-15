import { useLayoutEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native"
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data"
function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })
    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }
        return <MealItem {...mealItemProps} />
    }

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title
        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(itemData) => itemData.id} renderItem={renderMealItem} />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})