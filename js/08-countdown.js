var number = parseInt(prompt("Enter a number:"));

if(isNaN(number)){
    alert("Refresh and enter a valid number");
}
else{
    while(number>=0)
    {
        console.log(number);
        number=number-1;
    }
}