import { forwardRef } from 'react';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';
import { styles } from './styles';

export const Text = forwardRef<RNText, TextProps>((props, ref) => {
  const { style, ...rest } = props;

  return (
    <RNText
      ref={ref}
      style={StyleSheet.compose(styles.text, style)}
      {...rest}
    />
  );
});

Text.displayName = 'Text';
