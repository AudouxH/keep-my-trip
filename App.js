import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from './assets/Marker_icon.png';

import get_list_of_all_markers from './components/functionals/get_list_of_all_markers';

import Map from './components/templates/Map';
import BottomButtons from './components/templates/BottomButtons';
import CategoriesModal from './components/templates/CategoriesModal';
import NewMarkerModal from './components/templates/NewMarkerModal';
import store_categories from './components/functionals/store_categories';
import get_categories from './components/functionals/get_categories';
// import ModifyMarkerModal from './components/templates/ModifyMarkerModal';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [isDisplayCategories, setIsDisplayCategories] = useState(false);

  const [allMarkers, setAllMarkers] = useState([]);
  const [listMarkers, setListMarkers] = useState([]);

  const [isDisplayNewMarker, setIsDisplayNewMarker] = useState(false);
  const [isDisplayNewButton, setIsDisplayNewButton] = useState(false);
  const [spot, setSpot] = useState({ latitude: 0, longitude: 0 });

  const [indexCategoryOfMarker, setIndexCategoryOfMarker] = useState(0);
  const [indexOfMarker, setIndexOfMarker] = useState(0);

  const [isDisplayModifyMarker, setIsDisplayModifyMarker] = useState(false);
  const [isDisplayModifyButton, setIsDisplayModifyButton] = useState(false);

  const COLORS = ["#C8D3D5", "#F33915", "#AE00BA", "#200086", "#00A1E0", "#EC9C00", "#FF7094", "#2CDC00", "#F7ED01", "#51A3A3"];

  useEffect(() => {
    if (categories.length > 1) {
      store_categories(categories);
    }
    get_categories(setCategories);
  }, []);

  useEffect(() => {
    get_list_of_all_markers(categories, setAllMarkers);
  }, [categories]);

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Map
        isDisplayNewButton={isDisplayNewButton}
        setIsDisplayNewButton={setIsDisplayNewButton}
        setIsDisplayModifyButton={setIsDisplayModifyButton}
        spot={spot}
        setSpot={setSpot}
        allMarkers={allMarkers}
        categories={categories}
        setIndexCategoryOfMarker={setIndexCategoryOfMarker}
        setIndexOfMarker={setIndexOfMarker}
        COLORS={COLORS}
      />

      <View style={styles.view_title}>
        <Image source={Icon} style={styles.title_icon} />
        <Text style={styles.title}>Keep My Trip</Text>
      </View>

      {isDisplayCategories ? <CategoriesModal categories={categories} setCategories={setCategories} COLORS={COLORS}/> : null}

      {isDisplayNewMarker ? <NewMarkerModal categories={categories} setListMarkers={setListMarkers} listMarkers={listMarkers} setAllMarkers={setAllMarkers} allMarkers={allMarkers} spot={spot}/> : null}

      {/* {isDisplayModifyMarker ? <ModifyMarkerModal categories={categories}/> : null} */}

      <BottomButtons
        setIsDisplayCategories={setIsDisplayCategories}
        isDisplayCategories={isDisplayCategories}
        setIsDisplayModifyMarker={setIsDisplayModifyMarker}
        isDisplayModifyButton={isDisplayModifyButton}
        isDisplayModifyMarker={isDisplayModifyMarker}
        setIsDisplayNewMarker={setIsDisplayNewMarker}
        isDisplayNewButton={isDisplayNewButton}
        isDisplayNewMarker={isDisplayNewMarker}
        indexCategoryOfMarker={indexCategoryOfMarker}
        indexOfMarker={indexOfMarker}
        listMarkers={listMarkers}
        setListMarkers={setListMarkers}
        categories={categories}
        setAllMarkers={setAllMarkers}
        setIsDisplayModifyButton={setIsDisplayModifyButton}
        />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view_title: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  title_icon: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#FFF',
  },
});

export default App;
