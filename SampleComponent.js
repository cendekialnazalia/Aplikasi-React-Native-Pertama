import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Cendekia</Text>
      <Luthfieta />
      <Text>Nazalia</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

//Functional Component
const Luthfieta = () => {
  return <Text>Luthfieta Mangkuningrat</Text>;
};

//Functional Component
const Photo = () => {
  return (
    <View>
      <Image
        source={{uri: 'https://placeimg.com/640/480/arch'}}
        style={{width: 100, height: 100, borderRadius: 50}}
      />
      <Text style={{color: 'blue', fontSize: 24}}>Ini Hewan</Text>
    </View>
  );
};

//Class Component
class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

//Class Component
class Profile extends Component {
  render() {
    return (
      <Image
        source={{uri: 'https://placeimg.com/640/480/animals'}}
        style={{width: 100, height: 100}}
      />
    );
  }
}

export default SampleComponent;
