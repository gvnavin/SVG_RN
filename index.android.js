/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import SVGImage from "react-native-svg-image";


export default class SVG_RN extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
    
                <SVGImage
                    style={{ width: 80, height: 80 }}
                    source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
                />
    
                <SVGImage
                    style={{ width: 80, height: 80 }}
                    source={{uri:'https://bestimulated.com/app/icons/category/trx.svg'}}
                />
                
                <SVGImage
                    style={{ width: 80, height: 80 }}
                    source={{uri:'https://fluent-panda.appspot.com.storage.googleapis.com/dumbbell.svg'}}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('SVG_RN', () => SVG_RN);
