import AsyncStorage from '@react-native-async-storage/async-storage';

const get_markers_from_category = async (category, setListMarkers) => {
    setListMarkers([]);

    try {
        const value = await AsyncStorage.getItem(category);
        if (value !== null) {
            setListMarkers(JSON.parse(value));
        }
    } catch (error) {
        console.log("error from get:", error);
    }
}

export default get_markers_from_category;