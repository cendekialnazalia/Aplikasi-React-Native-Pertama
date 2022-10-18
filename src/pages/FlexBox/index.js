import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

/**
 * [Description FlexBox]
 */
// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> constructor');
//     this.state = {
//       subsriber: 200,
//     };
//   }
//   componentDidMount() {
//     console.log('==> component did mount');
//     setTimeout(() => {
//       this.setState({
//         subsriber: 400,
//       });
//     }, 2000);
//   }
//   componentDidUpdate() {
//     console.log('==> Component did update');
//   }

//   componentWillUnmount() {
//     console.log('==> Component will unmount');
//   }
//   render() {
//     console.log('==> render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#c8d6e5',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//           <Image
//             source={{
//               uri: 'https://mir-s3-cdn-cf.behance.net/user/276/3349db162474957.61f56e52e342b.jpg',
//             }}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Cendekia Luthfieta Nazalia
//             </Text>
//             <Text>{this.state.subsriber} ribu subcriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subcriber, setSubcriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubcriber(400);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subcriber]);

  useEffect(() => {
    console.log('did update');
    setTimeout(() => {
      setSubcriber(400);
    }, 2000);
  }, [subcriber]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
        <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
        <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
        <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={{
            uri: 'https://mir-s3-cdn-cf.behance.net/user/276/3349db162474957.61f56e52e342b.jpg',
          }}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Cendekia Luthfieta Nazalia
          </Text>
          <Text>{subcriber} ribu subcriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
