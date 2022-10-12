import React from 'react';
import {View, ScrollView} from 'react-native';
import MaterialFlexBox from './MateriFlexBox';
import PositionReactNative from './PositionReactNative';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <MaterialFlexBox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
