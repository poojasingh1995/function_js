const arr = [4, 6, 34, 76, 78, 44, 34, 26, 88, 76, 42];
const dividesAll = k => {
   const result = [];
   let num;
   for (num = Math.floor(k / 2); num > 1; num--){
      if (k % num === 0) {
         result.push(num);
      }
   };
   return result;
};
const dividesArray = arr => {
   return arr.map(dividesAll).reduce((acc, val) => {
      return acc.filter(k => val.includes(k));
   });
};
console.log(dividesArray(arr));