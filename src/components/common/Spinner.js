// import
import React from 'react';
import {ActivityIndicator, View} from 'react-native';

// component
export const Spinner = ({size}) => {

    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator
                size={size || 'large'}
            />
        </View>
    )
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}