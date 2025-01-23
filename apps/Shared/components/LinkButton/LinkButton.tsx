import { memo, ReactNode, useCallback } from 'react';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp, StyleSheet,
  ViewStyle,
} from 'react-native';
import { Text } from '@root/Shared/components/Text';
import { styles } from './styles';

interface IProps extends Omit<PressableProps, 'children'> {
  title: string;
  left?: ReactNode;
  staticStyle?: StyleProp<ViewStyle>;
  activeOpacity?: number;
}

export const LinkButton = memo((props: IProps) => {
  const {
    title,
    style,
    staticStyle,
    activeOpacity = 0.5,
    left,
    ...pressableProps
  } = props;

  const pressStyle = useCallback(({ pressed }: PressableStateCallbackType) => StyleSheet.compose(
    { opacity: pressed ? activeOpacity : 1 },
    staticStyle,
  ), [activeOpacity, staticStyle]);

  return (
    <Pressable style={pressStyle} {...pressableProps}>
      {left as ReactNode}
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
});

LinkButton.displayName = 'LinkButton';
