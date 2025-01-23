import { memo, PropsWithChildren, useCallback } from 'react';
import { GestureResponderEvent, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { OpacityPressable } from '@root/Shared/components/OpacityPressable';
import { TOpacityPressableProps } from '@root/Shared/components/OpacityPressable/OpacityPressable';
import { styles } from './styles';

interface IProps extends Omit<PropsWithChildren<TOpacityPressableProps>, 'ref'> {
  innerStyle?: StyleProp<ViewStyle>
  disabled?: boolean;
}

export const Button = memo((props: IProps) => {
  const { children, disabled, onPress, layoutStyle, innerStyle, ...rest } = props;

  const handleClick = useCallback((e: GestureResponderEvent) => {
    if (disabled) return;
    onPress?.(e);
  }, [disabled, onPress]);

  return (
    <OpacityPressable
      {...rest}
      layoutStyle={StyleSheet.compose(styles.layout, layoutStyle)}
      onPress={handleClick}
    >
      <LinearGradient
        colors={['#55A8A1', '#3F7C77', '#000000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ opacity: disabled ? 0.5 : 1 }}
      >
        <View style={StyleSheet.compose(styles.innerButton, innerStyle)}>
          {children}
        </View>
      </LinearGradient>
    </OpacityPressable>
  );
});

Button.displayName = 'Button';
