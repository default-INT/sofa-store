import { memo, PropsWithChildren } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';
import { styles } from './styles';

export const OrderCardWrapper = memo((props: PropsWithChildren<{}>) => {
  const { children } = props;

  return (
    <LinearGradient
      colors={['#55A8A1', '#3F7C77', '#000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.innerContainer}>
        {children}
      </View>
    </LinearGradient>
  );
});

OrderCardWrapper.displayName = 'OrderCardWrapper';
