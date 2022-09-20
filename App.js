import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Cendekia</Text>
      <Luthfieta />
      <Text>Nazalia</Text>
      <Photo />

      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Luthfieta = () => {
  return <Text>Luthfieta Mangkuningrat</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/640/480/arch'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default App;
