import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../styles';

const Vista2 = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contacto</Text>
      <Text style={styles.text}>Gerardo Pérez</Text>
      <Text style={styles.text}>+502 53761139</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn-icons.flaticon.com/png/512/3416/premium/3416025.png?token=exp=1653584361~hmac=d2e724e9c715731aa98e981880d53884',
        }}
      />
    </View>
  );
};

export default Vista2;
