import { memo, useCallback, useState } from 'react';
import { Alert, Image, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { ImageLibraryOptions } from 'react-native-image-picker/src/types';
import { PlusIcon } from '@root/Shared/assets/icons';
import { OpacityPressable } from '@root/Shared/components/OpacityPressable';
import { Text } from '@root/Shared/components/Text';
import { useTranslation } from 'react-i18next';
import { getBase64Uri } from '@root/Shared/utils/getBase64Url';
import { styles } from './styles';

const galleryOptions: ImageLibraryOptions = {
  mediaType: 'photo',
  quality: 1,
  includeBase64: true,
};

export interface IEditAvatarProps {
  value?: string
  onChange?: (value: string) => void
}

export const EditAvatarField = memo((props: IEditAvatarProps) => {
  const { value, onChange } = props;
  const { t } = useTranslation('profile');
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectImage = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await launchImageLibrary(galleryOptions);
      if (response.didCancel) return;
      if (response.errorCode) return;
      const base64String = response?.assets?.[0].base64;
      if (!base64String) throw new Error('Not found image');
      onChange?.(base64String);
    } catch (e) {
      Alert.alert(t('form.errors.catch.title'), t('form.errors.catch.message'));
    } finally {
      setIsLoading(false);
    }
  }, [onChange, t]);

  return (
    <OpacityPressable
      disabled={isLoading}
      layoutStyle={styles.root}
      onPress={handleSelectImage}
    >
      <View style={styles.avatarContainer}>
        {!value && <PlusIcon />}
        {Boolean(value) && (
          <Image
            style={styles.imageAvatar}
            source={{ uri: getBase64Uri(value) }}
            resizeMode='cover'
          />
        )}
      </View>
      <Text style={styles.text}>{t('form.avatar.change')}</Text>
    </OpacityPressable>
  );
});

EditAvatarField.displayName = 'EditAvatar';
