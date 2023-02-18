import React from 'react';
import {Text, View} from "react-native";

const Profile = ({navigation, route}) => {
    return (
        <View>
           <Text>
               Welcome to profile {route.params.name}
           </Text>
        </View>
    );
};

export default Profile;