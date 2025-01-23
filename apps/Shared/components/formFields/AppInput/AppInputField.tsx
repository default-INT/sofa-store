import { ComponentProps, memo, VFC } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { theme } from '@root/Shared/styles/theme';
import { SvgProps } from 'react-native-svg';
import { styles } from './styles';

export interface IAppInputFieldProps extends ComponentProps<typeof TextInput> {
  label?: string;
  icon?: VFC<SvgProps>;
}

export const AppInputField = memo((props: IAppInputFieldProps) => {
  const { style, label, icon: Icon, ...inputProps } = props;

  return (
    <View style={styles.root}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={StyleSheet.compose(styles.input, style)}>
        {Icon && <Icon style={styles.icon} />}
        <TextInput
          style={styles.textInput}
          placeholderTextColor={theme.placeholder}
          {...inputProps}
        />
      </View>

    </View>
  );
});

AppInputField.displayName = 'AppInput';
