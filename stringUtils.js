function reverse(str) {
    return str.split('').reverse().join('');
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  module.exports = { reverse, capitalize };
  