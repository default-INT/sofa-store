import { memo, useMemo } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { FurnitureType } from '@root/Shared/types/furniture';
import { furnitureData } from '@root/Shared/constants/furnitureList';
import { Text } from '@root/Shared/components/Text';
import { renderFurnitureCartItem } from '@root/Shared/components/FurnitureCard';
import { GoToCartButton } from './components/GoToCartButton';
import { styles } from './styles';

export const HomeScreen = memo(() => {
  const sections = useMemo(() => Object.values(FurnitureType).map(type => ({
    title: type,
    data: furnitureData.filter(item => item.type === type),
  })), []);

  return (
    <>
      <ScrollView style={styles.root}>
        {sections.map(section => (
          <View key={section.title}>
            <View style={styles.title}>
              <Text style={styles.sectionTitleText}>
                {section.title}
              </Text>
            </View>
            <FlatList
              data={section.data}
              horizontal
              keyExtractor={item => item.id}
              renderItem={renderFurnitureCartItem}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatList}
            />
          </View>
        ))}
      </ScrollView>
      <GoToCartButton />
    </>
  );
});

HomeScreen.displayName = 'HomeScreen';
