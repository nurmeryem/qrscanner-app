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
