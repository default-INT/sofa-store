import { memo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRoute } from '@react-navigation/native';
import { IOrder, userStore } from '@root/Shared/store/userStore';
import { OrderCardWrapper } from '@root/Shared/components/OrderCardWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OrderItem } from './components/OrderItem';
import { styles } from './styles';

export const OrderDetailsScreen = memo(() => {
  const { params } = useRoute<any>();
  const { t } = useTranslation('orders');
  const { order } = params as { order: IOrder };
  const { cartItems } = order;
  const userInfo = order.userInfo || userStore.userInfo;

  return (
    <ScrollView style={styles.root}>
      <SafeAreaView edges={['bottom']}>
        <View style={styles.innerContainer}>
          <OrderCardWrapper>
            {cartItems?.map((cartItem, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <OrderItem key={`${idx}${cartItem.count}`} cart={cartItem} />
            ))}
            <View style={styles.userInfoContainer}>
              <Text style={styles.userInfoText}>{userInfo.name}</Text>
              <Text style={styles.userInfoText}>{userInfo.email}</Text>
              <Text style={styles.userInfoText}>{userInfo.address}</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.priceLabel}>{t('card.total_payment')}</Text>
              <Text style={styles.priceText}>
                {t('common:dollars_val', { value: order.totalPayments })}
              </Text>
            </View>
          </OrderCardWrapper>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
});

OrderDetailsScreen.displayName = 'OrderDetailsScreen';
