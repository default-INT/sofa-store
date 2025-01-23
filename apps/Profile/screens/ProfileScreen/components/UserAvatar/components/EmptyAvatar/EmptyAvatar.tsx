import { memo } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

export const EmptyAvatar = memo(() => <View style={styles.avatarContainer} />);
