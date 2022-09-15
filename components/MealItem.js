import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"


function MealItem({ title, imageUrl, duration, complexity, affordability }) {
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#cccccc' }} style={({ pressed }) => pressed ? styles.buttonPressed : null} >
                <View>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.detais}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8,
    },
    detais: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    buttonPressed: {
        opacity: 0.5
    }
})