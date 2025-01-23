import { memo, PropsWithChildren } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

export const CardPlaceholder = memo((props: PropsWithChildren<{}>) => {
  const { children } = props;

  return (
    <LinearGradient
      colors={['rgba(252, 247, 248, 0)', 'rgba(104, 104, 104, 0.13)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      {children}
    </LinearGradient>
  );
});

CardPlaceholder.displayName = 'CardPlaceholder';
