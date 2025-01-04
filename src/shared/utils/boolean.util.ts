export const parseStringWithBoolean = (val: string) => {
  const lowVal = val.trim().toLowerCase();

  if (lowVal === 'true') return true;
  if (lowVal === 'false') return false;

  throw new Error(`Value: ${val} can not be parsed to boolean`);
};
