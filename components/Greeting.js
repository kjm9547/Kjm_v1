import React from "react";
import {View,Text} from 'react-native'

function Greeting(props) {
    return(
        <View>
            <Text>
                안녕 {props.name}!
            </Text>
        </View>
    )
};

Greeting.defaultProps = {
    name: '리액트 네이티브s'
}
export default Greeting;