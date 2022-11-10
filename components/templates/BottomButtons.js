import React, { useEffect, useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
} from 'react-native';

import menu_icon from '../../assets/icon_menu.png';
import get_categories from '../functionals/get_categories';
import get_list_of_all_markers from '../functionals/get_list_of_all_markers';
import get_markers_from_category from '../functionals/get_markers_from_category';
import store_markers_into_category from '../functionals/store_markers_into_category';

const BottomButtons = ({
    setIsDisplayCategories,
    setIsDisplayModifyMarker,
    setIsDisplayModifyButton,
    setIsDisplayNewMarker,
    isDisplayNewButton,
    isDisplayModifyButton,
    isDisplayCategories,
    isDisplayModifyMarker,
    isDisplayNewMarker,
    indexCategoryOfMarker,
    indexOfMarker,
    categories,
    setListMarkers,
    listMarkers,
    setAllMarkers,
}) => {
    const [isDelete, setIsDelete] = useState(false);

    useEffect(() => {
        if (isDelete && listMarkers.length) {
            const array = listMarkers;
            array.splice(indexOfMarker, 1);
            store_markers_into_category(categories[indexCategoryOfMarker], array);
            get_list_of_all_markers(categories, setAllMarkers);
        }
    }, [isDelete]);

    return (
        <View style={styles.view_buttons}>

            {isDisplayNewButton ?
                <TouchableOpacity onPress={() => {
                    setIsDisplayNewMarker(!isDisplayNewMarker)
                    setIsDisplayModifyMarker(false)
                    setIsDisplayCategories(false)
                }} style={styles.new_touchable}>
                    <Text style={styles.new_text}>Create new spot</Text>
                </TouchableOpacity>
                : null}

            {isDisplayModifyButton ?
                <>
                    <TouchableOpacity onPress={async () => {
                        if (indexCategoryOfMarker >= 0) {
                            await get_markers_from_category(categories[indexCategoryOfMarker], setListMarkers);
                        }
                        setIsDelete(true);
                        setIsDisplayCategories(false);
                        setIsDisplayNewMarker(false);
                    }} style={styles.delete_touchable}>
                        <Text style={styles.delete_text}>delete</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => {
                        setIsDisplayModifyMarker(!isDisplayModifyMarker)
                        setIsDisplayCategories(false)
                        setIsDisplayNewMarker(false)
                    }} style={styles.modify_touchable}>
                        <Text style={styles.modify_text}>modify</Text>
                    </TouchableOpacity> */}
                </>
                : null}

            <TouchableOpacity onPress={() => {
                setIsDisplayCategories(!isDisplayCategories)
                setIsDisplayNewMarker(false)
                setIsDisplayModifyMarker(false)
                setIsDisplayModifyButton(false)
            }} style={styles.menu_touchable}>
                <Image source={menu_icon} style={styles.menu_icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    view_buttons: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 25,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    menu_touchable: {
        backgroundColor: '#CDCDCD',
        padding: 8,
        borderRadius: 30,
        marginRight: 25,
    },
    menu_icon: {
        width: 30,
        height: 30,
    },
    new_touchable: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00B633',
        height: 38,
        marginRight: 35,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 25,
    },
    new_text: {
        color: '#FFF',
        textAlign: 'center',
    },
    modify_touchable: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFA723',
        height: 38,
        marginRight: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 25,
    },
    modify_text: {
        color: '#FFF',
        textAlign: 'center',
    },
    delete_touchable: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 38,
        backgroundColor: '#FD4D4D',
        marginRight: 70,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 25,
    },
    delete_text: {
        color: '#FFF',
        textAlign: 'center',
    },
});

export default BottomButtons;