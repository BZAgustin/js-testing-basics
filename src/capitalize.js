function capitalize(string) {
  if(string === '') {
    return '';
  }
  
  const stringArr = string.split('');
  stringArr[0] = stringArr[0].toUpperCase();
  return stringArr.join('');
}

export default capitalize;