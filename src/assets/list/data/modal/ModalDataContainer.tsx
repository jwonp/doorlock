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
        marginTop: '6%',
        marginLeft: `${tab * 2}%`,
      }}>
      {children}
    </View>
  );
};

export default ModalDataContainer;
