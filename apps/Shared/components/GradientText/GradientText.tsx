import { memo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from '@root/Shared/components/Text';
import { styles } from './styles';

interface IProps {
  title?: string
  style?: StyleProp<ViewStyle>
}

export const GradientText = memo((props: IProps) => {
  const { title, style } = props;

  return (
    <View style={StyleSheet.compose(styles.container, style)}>
      <MaskedView
        style={styles.maskedView}
        maskElement={<Text style={styles.text}>{title}</Text>}
      >
        <LinearGradient
          colors={['#55A8A1', '#3F7C77', '#000000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        />
      </MaskedView>
    </View>
  );
});

GradientText.displayName = 'GradientText';
