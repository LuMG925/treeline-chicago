import {Button, Text, View } from "react-native";

import { withNavigation } from "react-navigation";
import {styles} from '../css/css'
import React from 'react';

interface Props {
    navigation: any
  }

class HomeScreen extends React.Component<Props> {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.HomeScreen}>
            <Button
            title="Go to Jane's profile"
            onPress={() => navigate('Profile', {name: 'Jane'})}
            />
        </View>
      );
    }
  }

const home_screen = withNavigation(HomeScreen);

export {home_screen, Props};