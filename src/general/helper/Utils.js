import { Alert, Linking, Platform } from "react-native";
// Open link with default web browser
export const openDefaultBrowser = async (url) => {
    // const supported = await Linking.canOpenURL(url);
    // console.log({ supported });
    // if (supported) {
    await Linking.openURL(url);
    // } else {
    //     Alert.alert(`Don't know how to open this URL: ${url}`);
    // }
};
// Check ios device
export const isIOS = () => {
    return Platform.OS === 'ios';
};

// Check android device
export const isAndroid = () => {
    return Platform.OS === 'android';
};
// Open app settings
export const openSettings = () => {
    if (Platform.OS === 'ios') {
        Linking.openURL('app-settings:');
    } else {
        Linking.openSettings();
    }
};