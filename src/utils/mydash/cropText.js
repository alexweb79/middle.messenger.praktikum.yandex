const cropText = (text = '', amount = 100) => {
  let newText = text.splice(0, amount);
  if (text.length > amount) {
    return newText + '...';
  }
  return newText;
}

export default cropText;
