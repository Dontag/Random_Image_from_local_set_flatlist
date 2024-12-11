import { Dimensions, Platform, StatusBar } from 'react-native';
import Constants from "expo-constants"

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

export const StatusBarHeight: any = StatusBar.currentHeight;

export { colors } from './colors';

export const IsIOS = Platform.OS === 'ios';

export { images } from './images';

export const getAppVersion = Constants.expoConfig?.version;