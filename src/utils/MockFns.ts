//mocking function for slow request
export const slowLittleBit = () =>
  new Promise(resolve => setTimeout(() => resolve(true), 2000));
