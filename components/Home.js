import React from 'react';
import {Button, View} from "react-native";

const Home = ({navigation}) => {
    return (
        <View>
            <Button
                title='go to profile'
                onPress={()=> navigation.navigate('Profile', {name: 'Jane'})}
            />
        </View>
    );
};

export default Home;