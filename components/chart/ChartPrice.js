import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from "react-native";
import Axios from 'axios'
import {apiData} from "../../config/config";
import axios from "axios";

import { Dimensions } from "react-native";
import {Svg} from "react-native-svg";
import { scaleLinear } from "d3-scale";
import Candle from "../Candle";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, {add, diffClamp, eq, modulo, sub,} from "react-native-reanimated";

const ChartPrice = () => {
    const { width: size } = Dimensions.get("window");

    const [isLoading, setLoading]=useState(true);
    const [data, setData] = useState([]);


    useEffect(()=>{

        axios.get(apiData + '/api/v3/klines', {
            params: {
                symbol: 'BTCUSDT',
                interval: '1h'
            }
        })
            .then(function (response) {
                setLoading(false)
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    const candles = data.slice(0, 20);

    const getDomain = (rows) => {
        const values = rows.map((item, index) => [Number(item[2]),Number(item[3])]).flat();
        return [Math.min(...values), Math.max(...values)];
    };

    const domain = getDomain(candles);

    const scaleY = scaleLinear().domain(domain).range([size, 0]);

    const scaleBody = scaleLinear()
        // .domain([0, Math.max(...domain) - Math.min(...domain)])
        .domain([0, domain[1]-domain[0]])
        .range([0, size]);
    const width = size/candles.length;
    console.log(width)

    return (
        <View style={styles.container}>
            {isLoading ?
                <ActivityIndicator/> :
                <>
                    <Svg width={'100%'} height={size}>
                        {data.map((candle, index) => (
                            <Candle
                                key={index}
                                candle={candle}
                                index={index}
                                width={width}
                                close={candle[4]}
                                open={candle[1]}
                                high={candle[2]}
                                low={candle[3]}
                                scaleBody={scaleBody}
                                scaleY={scaleY}
                            />
                        ))}
                    </Svg>

                </>
            }
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        minHeight: 200,
        backgroundColor: "#000",
        marginBottom: 10
    },
    chart: {
        flex: 1
    }
})

export default ChartPrice;