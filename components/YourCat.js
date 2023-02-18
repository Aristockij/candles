import React, {useState} from 'react';
import {Text, View, TextInput, Image} from "react-native";

const YourCat = ({name, val}) => {
    const [text, setText] = useState('');
    return (
        <View
            style={{
                marginBottom:20
            }}
        >
            <Image
                source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
                style={{width: 200, height: 200}}
            />

            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    padding: 10
                }}
                onChangeText={newText => setText(newText)}
                placeholder={'Введите новый текст'}
                defaultValue={text}
            />
            <Text>
                {text.split( ' ').map((word)=>word && '🍕').join(' ')}
            </Text>
        </View>

    );
};

export default YourCat;