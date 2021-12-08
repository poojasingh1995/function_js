// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39   
// 3 + 9 = 12                  
// 1 + 2 = 3                    

const num = 1679583;
const sumDigit = (num, sum = 0) => {
   if(num){
      return sumDigit(Math.floor(num / 10), sum + num % 10);
   };
   return sum;
};
const persistence = num => {
   num = Math.abs(num);
   let res = 0;
   while(num > 9){
      num = sumDigit(num);
      res++;
   };
   return res;
};
console.log(persistence(num));