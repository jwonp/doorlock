import React from 'react';
import {View} from 'react-native';

const ModalDataContainer = ({
  children,
  tab,
}: {
  children: React.ReactNode | React.ReactNode[];
  tab?: number;
}) => {
  return (
    <View
      style={{
        marginTop: '5%',
        marginBottom: '3%',
        marginLeft: `${tab * 2}%`,
        paddingLeft: '5%',
        paddingRight: '5%',
      }}>
      {children}
    </View>
  );
};

export default ModalDataContainer;
