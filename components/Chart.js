import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Title from "./chart/Title";
import ChartPrice from "./chart/ChartPrice";
import ValueTable from "./chart/ValueTable";
import Time from "./chart/Time";

const Chart = () => {
    return (
        <View style={styles.container}>
            <Title/>
            <ChartPrice/>
            <ValueTable/>
            <Time/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 'auto',
        maxHeight: 500,
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
});

export default Chart;