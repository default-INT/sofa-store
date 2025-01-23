import { memo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { baseStyles } from '@root/Shared/styles/baseStyles';
import { AppInput } from '@root/Shared/components/formFields/AppInput';
import { SearchIcon } from '@root/Shared/assets/icons';
import { furnitureData } from '@root/Shared/constants/furnitureList';
import { renderDummyFurnitureCartItem } from '@root/Shared/components/FurnitureCard';
import { EmptySearchPlaceholder } from './components/EmptySearchPlaceholder';
import { styles } from './styles';

export const SearchScreen = memo(() => {
  const { t } = useTranslation('search');
  const [searchText, setSearchText] = useState('');

  const filteredItems = searchText.trim().length
    ? furnitureData.filter(({ title }) => title.includes(searchText))
    : [];

  return (
    <View style={baseStyles.screenContainer}>
      <AppInput
        icon={SearchIcon}
        placeholder={t('fields.search.placeholder')}
        onChangeText={setSearchText}
        autoCorrect={false}
      />
      <FlatList
        keyExtractor={item => item.id}
        numColumns={2}
        data={filteredItems}
        showsVerticalScrollIndicator={false}
        renderItem={renderDummyFurnitureCartItem}
        columnWrapperStyle={styles.flatListColumnWrapper}
        ListEmptyComponent={EmptySearchPlaceholder}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
});

SearchScreen.displayName = 'SearchScreen';
