import AsyncStorage from '@react-native-async-storage/async-storage';
import get_markers_from_category from './get_markers_from_category';

const store_markers_into_category = async (category, listMarkers) => {
    try {
        await AsyncStorage.setItem(
            category,
            JSON.stringify(listMarkers)
        );
    } catch (error) {
        console.log("error from store categories:", error);
    }
}

export default store_markers_into_category;