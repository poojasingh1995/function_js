const num = 103;
const isGapful = n => {
   if (n < 100){
      return false;
   }
   const temp = Array.from(n.toString());
   return n % (temp[0] + temp[temp.length - 1]) === 0;
}
function getClosestGapful(n) {
   let left = n, right = n;
   while (!isGapful(right)){
      right++;
   }
   if (n < 100){
      return right;
   }
   while (!isGapful(left)){
      left++;
   }
   return n - left <= right - n ? left : right;
};
console.log(getClosestGapful(25));
console.log(getClosestGapful(num));