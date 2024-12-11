import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootSiblingParent } from 'react-native-root-siblings';
import App from './App'

const index = () => {
    return (
        <RootSiblingParent>
            <App />
        </RootSiblingParent>
    )
}

AppRegistry.registerComponent("NugBucks", () => index);
