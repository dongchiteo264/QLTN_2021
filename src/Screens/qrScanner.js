import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Dimensions,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Linking
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const qrScanner = () => {
    const onSuccess = e => {
      console.log(e.data)
    };
    return (
        <View style={{ flex: 1 }}>
            <QRCodeScanner
            containerStyle={{alignItems:'center'}}
                checkAndroid6Permissions={true}
                cameraStyle={{ width: 350, height: 350 }}
                onRead={onSuccess}
                topContent={
                    <Text style={styles.centerText}>
                        Go to{' '}
                        <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                        your computer and scan the QR code.
                    </Text>
                }
                bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable}>
                        <Text style={styles.buttonText}>OK. Got it!</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}
export default qrScanner
const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
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
