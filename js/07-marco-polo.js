var number=1;

while(number<=100){
    if((number%3===0)&&(number%5===0)){
        console.log(number + " Marco! Polo!")
    }
    else if(number%3===0){
        console.log(number + " Marco!")
    }
    else if(number%5===0){
        console.log(number + " Polo!");
    }
    number=number+1; 
}
