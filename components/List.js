import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, FlatList, Text, View, ActivityIndicator} from "react-native";

const List = () => {


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 50,
        },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
        },
    });

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, padding: 24 }}>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>{item.title}, {item.releaseYear}</Text>
                        )}
                    />
                )}
            </View>
        </View>
    );
};

export default List;