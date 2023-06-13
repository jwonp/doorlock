export const convertFirstTextUpperCase = (text: string) => {
  const first = text.substring(0, 1);
  const others = text.substring(1);

  return `${first.toUpperCase()}${others}`;
};
