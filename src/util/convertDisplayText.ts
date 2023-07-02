export const getDisplayText = (text: string | number | undefined) => {
  if (typeof text === undefined) {
    return '';
  }
  if (typeof text === 'string') {
    return text;
  }
  return (text as number) > 0 ? text.toString() : '';
};
