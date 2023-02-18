import { StyleSheet, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Chart from "./components/Chart";

export default function App() {
    let name = 'fucking slave'
    let val = [{i:1}, {i:2}, {i:3}, {i:4}, {i:5}, {i:6}, {i:7}, {i:8}, {i:9}, {i:10}];
    const Stack = createNativeStackNavigator();

    return (
          <View style={styles.container}>
              <Chart/>
          </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
