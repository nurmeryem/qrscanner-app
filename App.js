import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import {Dimensions} from "react-native-web";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export  default  class Qrscanner extends Component {
  onSuccess = e => {
    if (e.type === "QR_CODE") {
      console.log("Bir qr code okutuldu.");
      Linking.openURL(e.data); // okutulan qr koddaki veriye gidiliyor.

    } else {
      alert("Okuma başarısız!");

    }
  };
  onPress = () => {
    Linking.openURL("https://github.com/nurmeryem");
  };

  render() {
    return (
        <QRCodeScanner
            onRead={this.onSuccess} // Qr okuma başarılı olduğunda
            //flashMode={RNCamera.Constants.FlashMode.torch} // flash modunu aktif edebiliriz.
            reactivate={true} // yalnızca bir kez qr okutmak istiyorsak bu özelliği 'false' olarak ayarlamalıyız.
            showMarker={true} // kamerada yeşil bir çerçeve gösterebiliriz.
            cameraType={"back"} // varsayılan olarak kamera tipi 'back' gelmekte ancak 'front' yazarak ön kamerayı açabiliriz.
            markerStyle={styles.markerS}
            topContent={
              <Text style={styles.ustBilgi}> Bu bir üst bilgidir. </Text>
            }
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable} onPress={this.onPress} >
                <Text style={styles.altBilgi}> ->Tıklayınız-> </Text>
              </TouchableOpacity>
            }
            cameraStyle={[{height: SCREEN_HEIGHT, width: SCREEN_WIDTH, zIndex: -9}]}
        />
    );
  }
}
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  ustBilgi: {
    fontSize:30,
    color:'#CC0DC0',
    textAlign:'center',
  },
  altBilgi: {
    fontSize:30,
    color:'#1B9EA4',
    textAlign:'center',
    marginTop:50,
  },
  markerS:{
    borderColor: "#00c000",
    borderWidth: 3,
    width: 200,
    height: 200,
    marginTop: 300,
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
