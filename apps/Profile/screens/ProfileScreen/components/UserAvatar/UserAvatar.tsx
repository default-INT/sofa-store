import { observer } from 'mobx-react-lite';
import { Image, View } from 'react-native';
import { userStore } from '@root/Shared/store/userStore';
import { getBase64Uri } from '@root/Shared/utils/getBase64Url';
import { styles } from './styles';
import { EmptyAvatar } from './components/EmptyAvatar';

export const UserAvatar = observer(() => {
  const src = userStore.userInfo.avatar;

  if (!src) return <EmptyAvatar />;

  return (
    <View style={styles.avatarContainer}>
      <Image
        style={styles.image}
        source={{
          uri: getBase64Uri(src),
        }}
        resizeMode='cover'
      />
    </View>
  );
});

UserAvatar.displayName = 'UserAvatar';
