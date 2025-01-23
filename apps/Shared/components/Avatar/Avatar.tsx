import { memo, useMemo } from 'react';
import { Image, View } from 'react-native';
import { getBase64Uri } from '@root/Shared/utils/getBase64Url';
import { ImageSourcePropType } from 'react-native/Libraries/Image/Image';
import { styles } from './styles';

interface IProps {
  src?: string | null
}

export const Avatar = memo((props: IProps) => {
  const { src } = props;

  const source = useMemo<ImageSourcePropType | null>(() => {
    if (!src) return null;

    return { uri: getBase64Uri(src) };
  }, [src]);

  return (
    <View style={styles.container}>
      {source
        ? (<Image style={styles.image} source={source} resizeMode='cover' />)
        : null}
    </View>
  );
});

Avatar.displayName = 'Avatar';
