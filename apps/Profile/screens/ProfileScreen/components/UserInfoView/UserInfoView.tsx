import { observer } from 'mobx-react-lite';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { UserAvatar } from '@root/Profile/screens/ProfileScreen/components/UserAvatar';
import { Text } from '@root/Shared/components/Text';
import { userStore } from '@root/Shared/store/userStore';
import { IconButton } from '@root/Shared/components/IconButton';
import { EditIcon } from '@root/Shared/assets/icons';
import { styles } from './styles';

interface IProps {
  onEditPress?: () => void;
}

export const UserInfoView = observer((props: IProps) => {
  const { onEditPress } = props;
  const { t } = useTranslation('profile');

  return (
    <View style={styles.container}>
      <View>
        <UserAvatar />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.displayName}>
          {userStore.userInfo.name || t('default_display_name')}
        </Text>
      </View>
      <View style={styles.editContainer}>
        <IconButton icon={EditIcon} onPress={onEditPress} />
      </View>
    </View>
  );
});

UserInfoView.displayName = 'UserInfoView';
