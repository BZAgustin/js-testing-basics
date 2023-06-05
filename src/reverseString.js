function reverseString(string) {
  if(string === '') {
    return '';
  }
  
  const reverse = [];
  
  for(const letter in string.split('')) {
    reverse.unshift(string[letter]);
  }

  return reverse.join('');
}

export default reverseString;