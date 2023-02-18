import React, {useState} from 'react';
import {Button, Text, View} from "react-native";

const Btns = ({name, texts, answer}) => {
    const [isHungry, setIsHungry] = useState(true);
    return (
            <View
            style={{
                marginBottom: 20
            }}>
                <Text>
                   Меня зовут {name}, и я {isHungry ? texts : answer}!
                </Text>
                <Button
                    onPress={()=>{
                        setIsHungry(!isHungry)
                    }}
                    title={isHungry ? 'покорми меня молочком' : 'спасибо :3'}
                />
            </View>
        );
};

export default Btns;