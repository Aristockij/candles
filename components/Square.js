import React from 'react';
import {ScrollView, View} from "react-native";

const Square = () => {
    return (
        <ScrollView
            horizontal={true}
        >
            <View style={{width: 100, height: 100, backgroundColor: 'red'}}/>
            <View style={{width: 100, height: 100, backgroundColor: 'green'}}/>
            <View style={{width: 100, height: 100, backgroundColor: 'blue'}}/>
            <View style={{width: 100, height: 100, backgroundColor: 'orange'}}/>
            <View style={{width: 100, height: 100, backgroundColor: 'black'}}/>
            <View style={{width: 100, height: 100, backgroundColor: 'purple'}}/>
            <View style={{width: 100, height: 100, backgroundColor: 'yellow'}}/>
            <View style={{width: 100, height: 100, backgroundColor: '#76d467'}}/>
        </ScrollView>
    );
};

export default Square;