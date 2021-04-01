# qrscanner-app
React native qrscanner 

## Requirements
### Android
* Projenizin AndroidManifest.xml dosyasına "Titreşim" iznini eklemeniz gerekir. Kod satırını, *android / app / src / main / AndroidManifest.xml* dosyanıza ekleyin.
 
 ```<uses-permission android:name="android.permission.VIBRATE"/> ``` 

* "React-native-camera" ayarı için "missingDimensionStrategy" yapılandırmasını "general" olarak eklemeniz gerekir, *android / app / build.gradle* dosyanıza aşağıdakileri ekleyin:
 ```
 android {
  ...
  defaultConfig {
    ...
    missingDimensionStrategy 'react-native-camera', 'general' 
  }
}
```

* react-native-camera, projenize eklemeniz gereken bu paket için bir bağımlılıktır. Yüklemek için aşağıdaki komutları çalıştırın:
``` 
    npm install react-native-camera --save
    react-native link react-native-camera
```
* react-native-qrcode-scanner ı kurmak ve kullanmaya başlamak için aşağıdaki komutları çalıştırın:
``` 
    npm install react-native-qrcode-scanner --save
    react-native link react-native-qrcode-scanner
```
* Ayrıca kamera ile ilgili izinleri işlemek için react-native-permissions yüklemeniz gerekecek. Aşağıdaki komutları çalıştırın:
``` 
    npm install react-native-permissions --save
    react-native link react-native-permissions
```

## Kullanımı :
```
<QRCodeScanner
            onRead={this.onSuccess} 
            //flashMode={RNCamera.Constants.FlashMode.torch}
            reactivate={true}
            showMarker={true}
            cameraType={"back"}
            markerStyle={styles.markerS}
            topContent={
              <Text style={styles.ustBilgi}> Bu bir üst bilgidir. </Text>
            }
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable} onPress={this.onPress} >
                <Text style={styles.altBilgi}> -> Tıklayınız <- </Text>
              </TouchableOpacity>
            }
            cameraStyle={[{height: SCREEN_HEIGHT, width: SCREEN_WIDTH, zIndex: -9}]}
        />
```
### Qrscanner ile neler yapabiliriz:
* reactivate -> Yalnızca bir kez qr okutmak istiyorsak bu özelliği 'false' olarak ayarlamalıyız. Ancak qr okutmaya devam etmek için 'true' olarak ayarlamalıyız.
* showMarker -> Kamerada qr okutma alanı olarak gösterebileceğimiz bir çerçeve ekleyebiliriz. 
* cameraType -> Kamera tipi varsayılan olarak 'back' gelmekte ancak 'front' yazarak ön kamerayı açabiliriz.
* markerStyle={styles.markerStili} -> Eklediğimiz çerceveyi özelleştirebiliriz.
* topContent -> Kameranın üst kısmına bir şey eklemek istiyorsak kullanabiliriz.
* bottomContent -> Kameranın alt kısmına bir şey eklemek istiyorsak kullanabiliriz.
