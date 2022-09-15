import { View, Pressable, Text, StyleSheet, Platform } from "react-native";


function CategoryGridTile({ title, color }) {

    return (
        <View style={styles.gridItem}>
            <Pressable android_ripple={{ color: '#cccccc' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        // shadow disappears on ios if overflow is hidden**
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 4,
        // code to add shadow on ios => **bg color is also required to add shadow on ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: 'white'
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})