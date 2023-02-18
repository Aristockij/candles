import React from 'react';
import {StyleSheet, Text, View} from "react-native";


const Title = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.price}>
                    BTC/USDT Price Chart
                </Text>
            </View>
            <View>
                <Text style={styles.date}>
                    23 September 13:00
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    price:{
        color: '#72ED93',
        fontSize: 14
    },
    date:{
        color: "#ffffff",
        fontSize: 14
    }
});

export default Title;