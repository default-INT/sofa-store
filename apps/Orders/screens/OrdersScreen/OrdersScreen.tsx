import { observer } from 'mobx-react-lite';
import { FlatList } from 'react-native';
import { userStore } from '@root/Shared/store/userStore';
import { renderOrderItem } from './components/OrderCardItem';
import { styles } from './styles';

export const OrdersScreen = observer(() => (
  <FlatList
    keyExtractor={(item, idx) => `${idx}${item.totalPayments}`}
    data={userStore.myOrders.filter(item => item.cartItems.length)}
    contentContainerStyle={styles.container}
    style={styles.flatList}
    showsVerticalScrollIndicator={false}
    renderItem={renderOrderItem}
  />
));

OrdersScreen.displayName = 'OrdersScreen';
