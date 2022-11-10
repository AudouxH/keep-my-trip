import AsyncStorage from '@react-native-async-storage/async-storage';

const get_list_of_all_markers = async ( categories, setAllMarkers ) => {
    setAllMarkers([]);
    categories ? categories.map(async (category) => {
        try {
            const value = await AsyncStorage.getItem(category);
            if (value !== null) {
                setAllMarkers(allMarkers => [...allMarkers, JSON.parse(value)]);
            }
        } catch (error) {
            console.log("error from get:", error);
        }
    }) : null
}

export default get_list_of_all_markers;