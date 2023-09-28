import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


import AddTaskModal from './TodoScreen';


const App = () => {
  return (
    <View  style={styles.container}>
    <View>
      <Text style={styles.text}>Yapılacaklar</Text>
      <AddTaskModal/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027",
  },
  text: {
    fontSize: 44,
    fontWeight: 'bold',
    color:"orange"
  },
  
});

export default App;
