/* eslint-disable react/prop-types */

import React, { useState, useEffect, useRef } from 'react';
import { Text, Image, View, ScrollView, PixelRatio } from 'react-native';
import { Api, Button, useNavigate, useOpenURL } from 'renative';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import Theme, { themeStyles, hasWebFocusableUI, ICON_LOGO, CONFIG, ROUTES } from '../config';
import packageJson from '../../package.json';
import QierPlayer from 'qier-player';


const FocusableView = withFocusable()(View);

const ScreenHome = (props) => {
    const [bgColor, setBgColor] = useState(Theme.color1);
    const navigate = useNavigate(props);
    const openURL = useOpenURL();
    let scrollRef;
    let handleFocus;
    let handleUp;

    if (hasWebFocusableUI) {
        scrollRef = useRef(null);
        const { setFocus } = props;
        handleFocus = ({ y }) => {
            scrollRef.current.scrollTo({ y });
        };
        handleUp = (direction) => {
            if (direction === 'up') scrollRef.current.scrollTo({ y: 0 });
        };
        useEffect(() => function cleanup() {
            setFocus('menu');
        }, []);
    }
    return (
        <View style={themeStyles.screen}>
            <ScrollView
                style={{ backgroundColor: bgColor }}
                ref={scrollRef}
                contentContainerStyle={themeStyles.container}
            >
                
                <QierPlayer srcOrigin='https://s3.my-film.pw/serial/The.Walking.Dead/04-480p.Farsi.Dubbed/The.Walking.Dead.S04E01.480p.Exclusive.Farsi.Dubbed.mkv' />
                
                <FocusableView style={{ marginTop: 20, flexDirection: 'row' }} onBecameFocused={handleFocus}>
                    
                </FocusableView>
            </ScrollView>
        </View>
    );
};

export default hasWebFocusableUI ? withFocusable()(ScreenHome) : ScreenHome;
