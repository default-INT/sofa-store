import { useMemo } from 'react';
import { Image, ListRenderItem, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Text } from '@root/Shared/components/Text';
import { IFurniture } from '@root/Shared/types/furniture';
import { StarIcon } from '@root/Shared/assets/icons';
import { theme } from '@root/Shared/styles/theme';
import { userStore } from '@root/Shared/store/userStore';
import { getFurnitureSource } from '@root/Shared/utils/getFurnitureSource';
import { ManageCart } from './components/ManageCart';
import { AddToCartButton } from './components/AddToCartButton';
import { styles } from './styles';

interface IProps {
  furniture: IFurniture;
  showManage?: boolean
}

export const FurnitureCard = observer((props: IProps) => {
  const { furniture, showManage = true } = props;
  const price = `$${furniture.price}`;
  const rate = furniture.rating.toFixed(1);
  const isItemExist = Boolean(userStore.getCartItemById(furniture.id));
  const source = useMemo(() => getFurnitureSource(furniture), [furniture]);

  return (
    <View style={styles.root}>
      {source && (
        <Image
          style={styles.cardImage}
          resizeMode='cover'
          source={source}
        />
      )}
      <View style={styles.content}>
        <Text style={styles.titleText}>
          {furniture.title}
        </Text>
        <Text style={styles.descriptionText}>{furniture.description}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.valueText}>
          {price}
        </Text>
        <View style={styles.rate}>
          <StarIcon
            style={styles.rate}
            width={11}
            height={11}
            color={theme.rateStar}
          />
          <Text style={styles.valueText}>
            {rate}
          </Text>
        </View>
      </View>
      {showManage && (
        <View style={styles.manageContainer}>
          {!isItemExist && <AddToCartButton furniture={furniture} />}
          {isItemExist && <ManageCart furniture={furniture} />}
        </View>
      )}
    </View>
  );
});

export const renderFurnitureCartItem: ListRenderItem<IFurniture> = listItem => (
  <FurnitureCard furniture={listItem.item} />
);

export const renderDummyFurnitureCartItem: ListRenderItem<IFurniture> = listItem => (
  <FurnitureCard furniture={listItem.item} showManage={false} />
);

FurnitureCard.displayName = 'FurnitureCard';
