

var arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
function Sort (arr)
{
    
    for (let i=0; i<arr.length ;i++)
    {
        for(let j=i+1;j<9;j++)
        {
            if(arr[j]<arr[i]){
               var x=arr[i];
                arr[i]=arr[j];
                arr[j]=x;
            }
        }
    }
    return arr;
}
console.log(Sort(arr));
