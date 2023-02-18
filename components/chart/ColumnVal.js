import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const ColumnVal = ({title, valInput, valOutput}) => {
    return (
        <View>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.val}>
                {valInput}
            </Text>
            <Text style={styles.val}>
                {valOutput}
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    title: {
        color: '#8D8D8D'
    },
    val: {
        color: '#fff',
        fontSize: 18
    }
})
export default ColumnVal;