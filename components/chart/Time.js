import React, {useState} from 'react';
import {StyleSheet, Button, Text, View, FlatList} from "react-native";

const Time = () => {
    const data=[
            {key: '15m'},
            {key: '1H'},
            {key: '4H'},
            {key: '1D'},
            {key: '1W'},
    ]
    const [active, setActive]=useState(0);
    return (
        <View style={{display:'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={{color: '#fff', width: 'auto', marginRight: 15}}>
                Time
            </Text>
            <View style={styles.list}>
                {data.map((item, index)=>
                    <Text key={index} id={index} onPress={()=>setActive(index)} style={{
                        color: '#fff',
                        marginRight: 15,
                        opacity: active === index ? 1 : .5
                    }}>{item.key}</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btn:{
        width: 10,
    },
    list:{
        display:'flex',
        flexDirection: 'row',
        flex: 1,
    }
})
export default Time;