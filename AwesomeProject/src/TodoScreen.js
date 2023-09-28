import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";

const dummyData = [
  {
    id: "01",
    title: "wash car",
  },
  {
    id: "02",
    title: "read a book",
  },
];

const TodoScreen = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  // Kaydet butonu işle
  const handleAddTodo = () => {
    // Yeni yapılacakları todoList'e ekleyin
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    // Input'u temizleyin
    setTodo("");
  };

  // Kullanıcı metnini işle
  const renderTodos = ({ item, index }) => {
    return (
      <View style={{ backgroundColor: "green", borderRadius: 6, paddingHorizontal: 6, paddingVertical: 10, marginBottom: 12 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 16, backgroundColor: "#778899", borderRadius: 10 }}>
      <TextInput
        style={{
          borderColor: "black",
          borderWidth: 2,
          borderRadius: 6,
          paddingVertical: 6,
          paddingHorizontal: 13,
          marginTop: 24,
        }}
        placeholder="Yapılacak..."
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "orange",
          borderRadius: 15,
          paddingVertical: 12,
          marginVertical: 24,
          alignItems: "center",
        }}
        onPress={() => handleAddTodo()}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 15,
            paddingHorizontal: 10,
          }}
        >
          Kaydet
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
        <Text style={{ color: "white", fontWeight: "bold", marginRight: 8 }}>Toplam Eleman Sayısı:</Text>
        <Text style={{ color: "white", fontWeight: "bold" }}>{todoList.length}</Text>
      </View>
      <FlatList data={todoList} renderItem={renderTodos} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
