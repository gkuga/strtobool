export const strToBool = (value: string): boolean => {
  const trueValues = ['y', 'yes', 't', 'true', 'on', '1'];
  const falseValues = ['n', 'no', 'f', 'false', 'off', '0'];

  const normalized = value.trim().toLowerCase();
  if (trueValues.includes(normalized)) return true;
  if (falseValues.includes(normalized)) return false;

  throw new Error(`Invalid truth value: ${value}`);
};
