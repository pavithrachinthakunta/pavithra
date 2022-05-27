var rev =0;
for (var i = n;math.trunc(i) > 0;i /= 10)
  {
    rev =((rev*10)+(math.trunc(i)%10));
  }
return (n==rev);
function countpal(min,max)
  {
    for(var i =min; i<=max; i++)
      {
        if(ispalindrome(i))
          console.log(i=" ");
      }
  }