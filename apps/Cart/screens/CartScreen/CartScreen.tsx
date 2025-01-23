import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SHIPPING_FEE, userStore } from '@root/Shared/store/userStore';
import { Button } from '@root/Shared/components/Button';
import { ArrowRightIcon } from '@root/Shared/assets/icons';
import { CardPlaceholder } from '@root/Shared/components/CardPlaceholder';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TRootNavProp } from '@root/Root/navigation/RootNavigator';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { styles } from './styles';
import { EmptyCartPlaceholder } from './components/EmptyCartPlaceholder';
import { CartItem } from './components/CartItem';

export const CartScreen = observer(() => {
  const { t } = useTranslation('cart');
  const navigation = useNavigation<TRootNavProp>();
  const isCartExist = Boolean(userStore.myCart?.length);

  const handleReserve = useCallback(() => {
    navigation.navigate(gen.loc(r.app.cart.reservation));
  }, [navigation]);

  if (!isCartExist) return <EmptyCartPlaceholder />;

  const amountOfGoods = userStore.myCart
    ?.reduce((prev, curr) => prev + curr.item.price * curr.count, 0) || 0;

  const feeFromAmount = amountOfGoods * SHIPPING_FEE;
  const totalPayments = feeFromAmount + amountOfGoods;

  return (
    <SafeAreaView style={styles.root} edges={['bottom']}>
      <ScrollView style={styles.wrapper}>
        <CardPlaceholder>
          <View style={styles.list}>
            {userStore.myCart?.map(item => (
              <CartItem key={item.item.id} cartItem={item} />
            ))}
          </View>
          <View style={styles.separatorWrapper}>
            <View style={StyleSheet.compose(styles.circle, styles.leftCircle)} />
            <View style={styles.separator} />
            <View style={StyleSheet.compose(styles.circle, styles.rightCircle)} />
          </View>
          <View style={styles.summary}>
            <View style={styles.summaryField}>
              <Text style={styles.summaryLabel}>
                {t('summary.amount_of_goods')}
              </Text>
              <Text style={styles.fieldValue}>
                {t('common:dollars_val', { value: amountOfGoods })}
              </Text>
            </View>
            <View style={styles.summaryField}>
              <Text style={styles.summaryLabel}>
                {t('summary.shipping_fee')}
              </Text>
              <Text style={styles.fieldValue}>
                {t('common:dollars_val', {
                  value: (feeFromAmount).toFixed(2),
                })}
              </Text>
            </View>
            <View style={styles.summaryField}>
              <Text style={styles.summaryLabel}>
                {t('summary.total_payment')}
              </Text>
              <Text style={styles.summaryValue}>
                {t('common:dollars_val', {
                  value: (totalPayments).toFixed(2),
                })}
              </Text>
            </View>
          </View>
        </CardPlaceholder>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button onPress={handleReserve}>
          <Text style={styles.buttonText}>
            {t('summary.place_an_order')}
          </Text>
          <ArrowRightIcon width={24} height={24} />
        </Button>
      </View>
    </SafeAreaView>
  );
});

CartScreen.displayName = 'CartScreen';
