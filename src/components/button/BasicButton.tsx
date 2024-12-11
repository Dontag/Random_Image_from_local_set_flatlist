import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

//utilities
import { width, colors } from '../../utilities/utilities';

interface Props {
    leftIconSize?: number,
    leftText?: string,
    leftIconColor?: string,
    leftIconName?: string,
    leftIconStyle?: object,
    rightIconSize?: number,
    rightIconColor?: string,
    rightIconName?: string,
    rightIconType?: string,
    width?: number | string,
    height?: number,
    backgroundColor?: string,
    elevation?: number,
    size?: string,
    borderRadius?: number,
    title: string,
    textStyles?: any,
    onPress: VoidFunction,
    otherStyle?: object,
    loading?: boolean,
    disabled?: boolean,
    leftTextStyle?: object,
    enableLinear?: boolean,
    linearColor1?: string,
    linearColor2?: string,
    centerIconSize?: number,
    centerIconColor?: string,
    centerIconName?: string,
    bold?: boolean,
    loadingColor?: string
}


const __btnsm = {
    width: width / 2.5,
    height: 40
}
const __btnmd = {
    width: width / 2,
    height: 50
}
const __btnlg = {
    width: width - 50,
    height: 55
}

const BasicButton = ({
    size,
    width,
    backgroundColor = colors.veryLightGreen,
    elevation = 1,
    borderRadius = 10,
    height = 40,
    onPress,
    otherStyle,
    disabled = false,
    title,
    leftText,
    leftIconSize,
    leftIconColor,
    leftIconName,
    leftIconStyle,
    rightIconSize,
    rightIconColor,
    rightIconName,
    rightIconType,
    textStyles,
    loading = false,
    leftTextStyle,
    centerIconSize,
    centerIconColor,
    centerIconName,
    bold = false,
    loadingColor = colors.verySoftLimeGreen
}: Props) => {
    const ButtonInnerContain = () => {
        return (
            <>
                {!loading ? <>
                    {leftIconName ? <View style={[styles.__leftIconView, { ...leftIconStyle }]}>
                        <Icon size={leftIconSize} color={leftIconColor} name={leftIconName} />
                    </View> : null}
                    {leftText ? <Text style={[styles.__leftTextView, { ...leftTextStyle }]}>
                        {leftText}
                    </Text> : null}
                    <View style={styles.__textView}>
                        {centerIconName ? <Icon size={centerIconSize} color={centerIconColor} name={centerIconName} /> : <Text numberOfLines={1} style={[styles.__text, { ...textStyles }, !centerIconName && { marginHorizontal: 10 }, bold && { fontWeight: 'bold' }]}> {title} </Text>}
                    </View>
                    {rightIconName ? <View style={styles.__rightIconView}>
                        {rightIconType === "Ionicons" ? <Ionicons size={rightIconSize} color={rightIconColor} name={rightIconName} /> : <Icon size={rightIconSize} color={rightIconColor} name={rightIconName} />}
                    </View> : null}
                </> :
                    <View style={styles.__loading}>
                        <ActivityIndicator size={"small"} color={loadingColor} />
                    </View>
                }
            </>
        )
    }

    return (
        <TouchableOpacity
            disabled={disabled}
            style={[styles.__buttonContainer,
            size === "sm" ? __btnsm :
                size === "md" ? __btnmd :
                    size === "lg" ? __btnlg :
                        null,
            { backgroundColor: backgroundColor, elevation: elevation, borderRadius: borderRadius },
            // @ts-ignore
            width ? { width: width } : null, height ? { height: height } : null,
            { ...otherStyle }
            ]}
            onPress={onPress}
        >
            {ButtonInnerContain()}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    __buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        overflow: "hidden",
    },
    __leftIconView: {
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    __leftTextView: {
        paddingHorizontal: 10,
        color: colors.black,
        fontSize: 16
    },
    __textView: {
        justifyContent: "center",
        alignItems: "center",
    },
    __text: {
        fontSize: 13,
    },
    __rightIconView: {
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    __loading: {
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
    }
});
export default BasicButton;
