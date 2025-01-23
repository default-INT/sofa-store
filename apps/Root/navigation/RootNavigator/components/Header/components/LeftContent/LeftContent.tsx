import { useCallback } from 'react';
import { View } from 'react-native';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { Avatar } from '@root/Shared/components/Avatar';
import { styles } from '@root/Root/navigation/RootNavigator/components/Header/styles';
import { LinkButton } from '@root/Shared/components/LinkButton';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { TRootNavProp } from '@root/Root/navigation/RootNavigator';
import { IconButton } from '@root/Shared/components/IconButton';
import { BackArrowIcon } from '@root/Shared/assets/icons';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { userStore } from '@root/Shared/store/userStore';
import { IDefaultParams } from '../../types';

interface IProps {
  currentScreenName: string;
  params: IDefaultParams
}

export const LeftContent = observer((props: IProps) => {
  const { params, currentScreenName } = props;
  const { t } = useTranslation('header');
  const navigation = useNavigation<TRootNavProp>();

  const handleGoToProfile = useCallback(() => {
    navigation.navigate(gen.loc(r.app.tabs), {
      screen: gen.loc(r.app.tabs.profile),
    });
  }, [navigation]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const isHideLeftButton = params?.hideBack;
  const isTabNavigator = currentScreenName.includes(gen.loc(r.app.tabs));

  if (isHideLeftButton) return <View />;
  if (isTabNavigator) {
    return (
      <LinkButton
        left={<Avatar src={toJS(userStore.userInfo.avatar)} />}
        staticStyle={styles.profile}
        title={t('profile.title')}
        onPress={handleGoToProfile}
      />
    );
  }

  return (
    <IconButton
      iconProps={{ height: 20, width: 20 }}
      icon={BackArrowIcon}
      onPress={handleGoBack}
      staticStyle={{
        padding: 4,
      }}
    />
  );
});

LeftContent.displayName = 'LeftContent';
