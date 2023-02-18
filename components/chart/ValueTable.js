import React from 'react';
import {View, StyleSheet} from "react-native";
import ColumnVal from "./ColumnVal";

const ValueTable = () => {
    return (
        <View style={styles.container}>
            <ColumnVal title={'Open/Close'} valInput={'19720'} valOutput={'11230'} />
            <ColumnVal title={'High/Low'} valInput={'19720'} valOutput={'11230'} />
            <ColumnVal title={'Change/Amplitude'} valInput={'19720'} valOutput={'11230'} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    }
})

export default ValueTable;