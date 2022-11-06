const cropText = (text = '', amount = 100): string => {
  const newText: string = text.slice(0, amount);
  if (text.length > amount) {
    return `${newText}...`;
  }
  return newText;
};

export default cropText;
