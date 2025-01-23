import { memo } from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@root/Shared/components/Text';
import { Button } from '@root/Shared/components/Button';
import { styles } from './styles';

interface IAction {
  title: string;
  onSubmit: () => void
}

interface IProps {
  title?: string;
  source?: ImageSourcePropType
  action?: IAction;
}

export const Placeholder = memo((props: IProps) => {
  const { title, source, action } = props;

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={source}
        />
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {action && (
        <Button
          layoutStyle={styles.buttonLayout}
          innerStyle={styles.textLayout}
          onPress={action.onSubmit}
        >
          <Text style={styles.buttonText}>{action.title}</Text>
        </Button>
      )}
    </SafeAreaView>
  );
});

Placeholder.displayName = 'Placeholder';
