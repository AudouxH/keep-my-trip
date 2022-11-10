import AsyncStorage from '@react-native-async-storage/async-storage';

const store_categories = async ( categories ) => {
    try {
        await AsyncStorage.setItem(
            'Categories',
            JSON.stringify(categories)
        );
    } catch (error) {
        console.log("error from store categories:", error);
    }
}

export default store_categories;