//	1)  Print odd numbers in an array 
let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].filter(num => num%2 != 0)
console.log(arr)

// 2) Convert all the strings to title caps in a string array 
let arr = ['hi!','i','submitted','the','task.'].map(element=> element.charAt(0).toUpperCase()+element.slice(1,element.length));
console.log(arr);

// 3)Sum of all numbers in an array 
let sum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].reduce((sum,num)=> sum + num,0)
console.log(sum)

//	4) Return all the prime numbers in an array 
let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].filter(num=>{
    for(let i = 2; i <= num/2 ; i++){
        if(num % i === 0 )
            return false;
    }
    return num >= 2;
})
console.log(arr)

// 5) Return all the palindromes in an array
const isPalindrome = (element)=>{
    for(let i = 0 ; i < element.length/2 ; i++){
        if(element.charAt(i) !== element.charAt(element.length - 1 - i))
            return false
    }
    return true;
}
let arr = (function(arr){
    return arr.filter(isPalindrome);
})(["malayalam","baba","palindrome"]);

console.log(arr);

// 7) Remove duplicates from an array
let arr = [1,2,2,3,4,5,6,6,7,9,8,1].reduce((arr,num)=> {
    if(arr.includes(num)) 
        return arr;
    arr.push(num);
    return arr;
},[]);
console.log(arr);

// 8) Rotate an array by k times and return the rotated array
let arr = (function(arr,k){
    let arrLength = arr.length;
    if(k > arrLength)
        k = k % arrLength;

    return arr.splice(arrLength- k ,arrLength).concat(arr);
})([0,1,2,3,4,5,6,7,8,9,10] , 5)
console.log(arr);