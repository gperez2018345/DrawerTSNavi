import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../styles';

const Vista1 = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Acerda de</Text>
      <Text style={styles.text}>Ejemplo DrawerNavigation</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/7087/7087095.png',
        }}
      />
    </View>
  );
};

export default Vista1;
