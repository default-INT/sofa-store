export type TGetRouteParams<T, P = any> = {
  [K in keyof T as `/${string & K}`]: P;
};
