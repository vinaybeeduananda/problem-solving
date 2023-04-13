// find the missing number in a sequence
// let arr = [1,3,5,4];
//   let  n = 5;
// function findmissing(arr, n) {
//     sum = 0;
//     for (ele of arr){
//         sum += ele;
//     }
//     let total = n*(n+1)/2
//     return total - sum 
// }
// findmissing(arr,n);
// console.log(findmissing(arr,n))

// find the multiple missing numbers in a sequence
// let arr = [1,2,4,8,6,9]
// let n = 10;
// function findAllMissing(arr,n){
//     let obj = {};
//     let missing = [];
//     for(num of arr){
//         obj[num]=num;
//     }
//     for (i=1;i<=n;i++){
//         if (obj[i]==undefined){
//             missing.push(i)
//         }
//     }
//     return missing
// }
// console.log(findAllMissing(arr,n))

// remove duplicate elements from an array 
// let arr = [ 1,2,1,5,7,4,5];
// function getuniquearray(arr){
//     let uniqueArr = [];
//     for(ele of arr){
//         if(uniqueArr.indexOf(ele)==-1){
//             uniqueArr.push(ele)
//         }
//     }
//     return uniqueArr
//     }
    
// console.log(arr);
// console.log(getuniquearray(arr))

// sort an array by even and odd numbers 

// let nums = [1,2,9,4,6,5,7,8,3]
// console.log(nums)
// nums.sort(
//     (a,b)=>{
//         if(a%2!=b%2){
//             return a%2==0?-1:1
//         }
//         else{
//           return a>b?1:-1
//         }
//     }
// )
// console.log(nums)

// find longest string in array of string 
//   let langs = ['html','css','javascript','react','vghsgdfexb']
// let maxlength = langs[0].length;

// for(i=1;i<langs.length;i++){
//     let c1 = langs[i].length
//     if(maxlength<c1){
//         maxlength=c1
// // console.log(langs[i]) -->only first one long string will be o/p
//     }
// }
// // following to print long strings with same length 
// let maxstrings = [];
// for(ele of langs){
//     if(ele.length == maxlength){
//         maxstrings.push(ele)
//     }
// }
// console.log(maxstrings)
// to find only one long word 
// const longWord = langs.reduce((prev, current) => {
//     return prev.length > current.length ? prev : current;
//   });
//   console.log(longWord);

// sort an array of strings by word length 

// let languages = ['html','css','javascript','php','python']
// languages.sort(
//     (s1,s2)=>{
//         return s1.length-s2.length
//         // s2.length-s1.length for descendiing order 
//     }
// )
// console.log(languages)

// sort binary array 
// let arr = [1,0,0,1,1,0,1,0]
// let length = arr.length;
// let  zcount=0;
// for(ele of arr){
//     if(ele==0)
//  zcount++
// }
// for (i=0;i<zcount;i++){
//     arr[i]=0
// }
// for(i=zcount;i<length;i++){
//     arr[i]=1
// }
// console.log(arr)
