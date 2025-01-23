import { proxyPath } from '@root/Shared/utils/router/proxyPath';

export const routesConfig = {
  app: {
    cart: {
      root: {
      },
      reservation: {
      },
      success: {},
    },
    orderDetails: {
      root: {},
    },
    orderingInformation: {
      root: {},
    },
    tabs: {
      home: { root: {} },
      search: { root: {} },
      orders: { root: {} },
      profile: { root: {} },
    },
  },
};

export const r = proxyPath<typeof routesConfig>(routesConfig);
