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
import SvgUri from 'react-native-svg-uri';

const svg_str = "<?xml version='1.0' encoding='UTF-8'?>\n" +
    "<!-- This file was generated by dvisvgm 1.15.1 -->\n" +
    "<svg height='11.3602pt' version='1.1' viewBox='-0.239051 -0.236029 12.2555 11.3602' width='12.2555pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n" +
    "<defs>\n" +
    "<path d='M5.66675 -4.87771C5.28418 -4.80598 5.14072 -4.51905 5.14072 -4.29191C5.14072 -4.00498 5.36787 -3.90934 5.53524 -3.90934C5.8939 -3.90934 6.14496 -4.22017 6.14496 -4.54296C6.14496 -5.04508 5.57111 -5.27223 5.06899 -5.27223C4.33973 -5.27223 3.93325 -4.55492 3.82565 -4.32777C3.55068 -5.22441 2.80946 -5.27223 2.59427 -5.27223C1.37484 -5.27223 0.729265 -3.7061 0.729265 -3.44309C0.729265 -3.39527 0.777086 -3.33549 0.860772 -3.33549C0.956413 -3.33549 0.980324 -3.40722 1.00423 -3.45504C1.41071 -4.78207 2.21171 -5.03313 2.55841 -5.03313C3.09639 -5.03313 3.20399 -4.53101 3.20399 -4.24408C3.20399 -3.98107 3.13225 -3.7061 2.98879 -3.13225L2.58232 -1.4944C2.40299 -0.777086 2.05629 -0.119552 1.42267 -0.119552C1.36289 -0.119552 1.06401 -0.119552 0.812951 -0.274969C1.24334 -0.358655 1.33898 -0.71731 1.33898 -0.860772C1.33898 -1.09988 1.15965 -1.24334 0.932503 -1.24334C0.645579 -1.24334 0.334745 -0.992279 0.334745 -0.609714C0.334745 -0.107597 0.896638 0.119552 1.41071 0.119552C1.98456 0.119552 2.39103 -0.334745 2.64209 -0.824907C2.83337 -0.119552 3.43113 0.119552 3.87347 0.119552C5.0929 0.119552 5.73848 -1.44658 5.73848 -1.70959C5.73848 -1.76936 5.69066 -1.81719 5.61893 -1.81719C5.51133 -1.81719 5.49938 -1.75741 5.46351 -1.66177C5.14072 -0.609714 4.44732 -0.119552 3.90934 -0.119552C3.49091 -0.119552 3.26376 -0.430386 3.26376 -0.920548C3.26376 -1.18356 3.31158 -1.37484 3.50286 -2.16389L3.9213 -3.78979C4.10062 -4.5071 4.5071 -5.03313 5.05704 -5.03313C5.08095 -5.03313 5.41569 -5.03313 5.66675 -4.87771Z' id='g0-120'/>\n" +
    "<path d='M2.24757 -1.6259C2.37509 -1.74545 2.70984 -2.00847 2.83736 -2.12005C3.33151 -2.57435 3.80174 -3.0127 3.80174 -3.73798C3.80174 -4.68643 3.00473 -5.30012 2.00847 -5.30012C1.05205 -5.30012 0.422416 -4.57484 0.422416 -3.8655C0.422416 -3.47497 0.73325 -3.41918 0.844832 -3.41918C1.0122 -3.41918 1.25928 -3.53873 1.25928 -3.84159C1.25928 -4.25604 0.860772 -4.25604 0.765131 -4.25604C0.996264 -4.83786 1.53026 -5.03711 1.9208 -5.03711C2.66202 -5.03711 3.04458 -4.40747 3.04458 -3.73798C3.04458 -2.90909 2.46276 -2.30336 1.52229 -1.33898L0.518057 -0.302864C0.422416 -0.215193 0.422416 -0.199253 0.422416 0H3.57061L3.80174 -1.42665H3.55467C3.53076 -1.26725 3.467 -0.868742 3.37136 -0.71731C3.32354 -0.653549 2.71781 -0.653549 2.59029 -0.653549H1.17161L2.24757 -1.6259Z' id='g1-50'/>\n" +
    "</defs>\n" +
    "<g id='page1' transform='matrix(1.13 0 0 1.13 -63.986 -63.1772)'>\n" +
    "<use x='56.4133' xlink:href='#g0-120' y='65.7534'/>\n" +
    "<use x='63.0405' xlink:href='#g1-50' y='60.8172'/>\n" +
    "</g>\n" +
    "</svg>\n";

export default class SVG_RN extends Component {
    render() {
        return (
    
            <SvgUri
                width="400"
                height="400"
                svgXmlData={svg_str}
            />
            
           /* <SvgUri
                width="200"
                height="200"
                source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
            />*/
            
            /*<View>
    
                <SvgUri
                    width="200"
                    height="200"
                    source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
                />
    
                <SvgUri
                    width="200"
                    height="200"
                    source={{uri:'https://bestimulated.com/app/icons/category/trx.svg'}}
                />
    
                <SvgUri
                    width="200"
                    height="200"
                    source={ require('./trx.svg') }
                />

            </View>*/
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('SVG_RN', () => SVG_RN);
