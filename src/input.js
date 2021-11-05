function importLetter(letter) {
  return import(`@/files/${letter}.js`);
}

console.log(importLetter('a'));
console.log(import('@/files/a.js'));
