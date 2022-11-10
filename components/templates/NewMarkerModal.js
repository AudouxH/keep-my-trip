import React, { useEffect, useState } from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';
import get_list_of_all_markers from '../functionals/get_list_of_all_markers';
import get_markers_from_category from '../functionals/get_markers_from_category';
import store_markers_into_category from '../functionals/store_markers_into_category';

const NewMarkerModal = ({ categories, setListMarkers, listMarkers, setAllMarkers, spot }) => {
    const [markerName, setMarkerName] = useState("");
    const [markerDescription, setMarkerDescription] = useState("");
    const [indexOfCategories, setIndexOfCategories] = useState(0);
    const [change, setChange] = useState(false);

    useEffect(() => {
        if (change) {
            store_markers_into_category(categories[indexOfCategories], listMarkers);
            get_list_of_all_markers(categories, setAllMarkers);
        }
    }, [change]);

    return (
        <View style={styles.view_new}>
            <View style={styles.box_new}>
                <Text style={styles.title_new}>Create new spot</Text>
                <TextInput
                    onChangeText={(text) => setMarkerName(text)}
                    style={styles.input_text} placeholder='name'>
                </TextInput>
                <TextInput
                    onChangeText={(text) => setMarkerDescription(text)}
                    style={styles.input_text} placeholder='description'>
                </TextInput>
                <ModalDropdown options={categories} onSelect={(index) => {
                    setIndexOfCategories(index)
                }} style={styles.modalDropdown} />
                <TouchableOpacity onPress={async () => {
                    if (indexOfCategories >= 0) {
                        await get_markers_from_category(categories[indexOfCategories], setListMarkers);
                        await setListMarkers(listMarkers => [...listMarkers, { name: markerName, description: markerDescription, latitude: spot.latitude, longitude: spot.longitude }]);
                        setChange(true);
                    }
                }} style={styles.touchableBtn}>
                    <Text style={styles.touchableText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view_new: {
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box_new: {
        width: 300,
        height: 350,
        backgroundColor: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title_new: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#000",
        textAlign: 'center',
    },
    input_text: {
        width: '85%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        borderWidth: 1,
    },
    modalDropdown: {
        width: '85%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        borderWidth: 1,
        height: 35,
    },
    touchableBtn: {
        width: '85%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        backgroundColor: '#00B633',
        borderRadius: 5,
        marginBottom: 10,
    },
    touchableText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default NewMarkerModal;