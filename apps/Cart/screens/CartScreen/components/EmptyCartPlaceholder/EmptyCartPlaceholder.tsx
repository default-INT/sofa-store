/* eslint-disable global-require */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Placeholder } from '@root/Shared/components/Placeholder';

export const EmptyCartPlaceholder = memo(() => {
  const { t } = useTranslation('cart');

  return (
    <Placeholder
      title={t('empty_placeholder')}
      source={require('@root/Shared/assets/images/empty-cart.png')}
    />
  );
});

EmptyCartPlaceholder.displayName = 'EmptyCartPlaceholder';
