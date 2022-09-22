import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import food from './rsc/food.jpg';

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
});
const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={style.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={food}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 16,
            color: '#000',
          }}>
          Menu Sun Date Moon 2022
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 16,
          }}>
          Rp.50.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 16,
            color: '#000',
          }}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              textAlign: 'center',
              color: 'white',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StylingReactNativeComponent;
