import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Vista1 from '../views/Vista1';
import Vista2 from '../views/Vista2';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Acerca de" component={Vista1} />
      <Drawer.Screen name="Contacto" component={Vista2} />
    </Drawer.Navigator>
  );
}
