/* eslint-disable global-require */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Placeholder } from '@root/Shared/components/Placeholder';

export const EmptySearchPlaceholder = memo(() => {
  const { t } = useTranslation('search');

  return (
    <Placeholder
      title={t('empty_search')}
      source={require('@root/Shared/assets/images/empty-search.png')}
    />
  );
});

EmptySearchPlaceholder.displayName = 'EmptySearchPlaceholder';
