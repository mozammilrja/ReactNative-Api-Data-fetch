import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, FlatList, SafeAreaView,Image } from "react-native";

// const movieURL = "https://jsonplaceholder.typicode.com/posts";
// const todosURL = "https://jsonplaceholder.typicode.com/todos";

const App = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setTitle(json.title);
      })
      .catch((error) => alert(error));
  });

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginHorizontal: 20, marginTop: 20 }}>
        <View style={{alignItems:'center',marginVertical:20}}>
          <Text style={{fontSize:30}}>Api Data</Text>
        </View>
        <View>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    padding: 10,
                    height: 50,
                    borderRadius: 12,
                    backgroundColor: "#51E1ED",
                    marginVertical: 10,
                  }}
                >
                  <View style={{ marginLeft: 5 }}>
                    <Text style={{ fontSize: 15 }}>{item.id}</Text>
                  </View>
                  <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 12 }}> {item.title} </Text>
                  </View>
                  <View>
                  {/* <Image source={item.url} style = {{height: 10, resizeMode : 'stretch', margin: 0,width:10}} /> */}
                  </View>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
