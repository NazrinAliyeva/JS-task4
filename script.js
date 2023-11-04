//task10
let nums=[2,5,7,12,16]
counter=0;
function SadeEdedler(nums){
   for(let i=0;i<nums.length;i++){
    if(nums[i]==2 || nums[i]==3|| nums[i]==5 || nums[i]==7  ){
        counter++
    }
 if(nums[i]%1==0 && nums[i]%nums[i]==0 &&nums[i]%2!==0 &&nums[i]%3!==0 &&nums[i]%4!==0  &&nums[i]%5!==0 &&nums[i]%6!==0 &&nums[i]%7!==0 &&nums[i]%8!==0 &&nums[i]%9!==0){
  counter++
}
console.log(counter)
}}
console.log(SadeEdedler(nums))
//task7
let array=[1,2,40,0,-1,5,2,9]
function Sign(array){
    let menfi=0;
    let musbet=0;
    let sifir=0;
    for(let i=0;i<array.length;i++){
        if(array[i]==0)
        sifir++
        if(array[i]<0)
        menfi++
        if(array[i]>0)
        musbet++
    }
    console.log(sifir)
    console.log(musbet)
    console.log(menfi)
}
console.log(Sign(array))

//task9
let arr=[1,2,3,4,5]
function Reverse(arr){
    for(let i=arr.length-1;i>=0;i--){
        let result=arr[i]
        return result;
    }
}
console.log(Reverse(arr))
//task8
let numbers=[1,5,9,8,43,64,13]
function Max(numbers){
    let result=Math.max(...numbers)
    return result;
}
console.log(Max(numbers))
function Min(numbers){
    let result=Math.min(...numbers)
    return result;
}
