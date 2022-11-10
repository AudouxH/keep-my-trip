import AsyncStorage from '@react-native-async-storage/async-storage';

const get_categories = async ( setCategories ) => {
    try {
        const value = await AsyncStorage.getItem('Categories');
        if (value !== null) {
            setCategories(JSON.parse(value));
        }
    } catch (error) {
        console.log("error from get:", error);
    }
}

export default get_categories