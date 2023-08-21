const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let num = 0   


for (let index = 0; index < numbers.length; index +=1){
    if (numbers[index] % 2 !==0){

        num +=1;
    }

}
if (num === 0){
    console.log ('Nenhum valor impar encontrado');
} 
else {
    console.log (num);
};