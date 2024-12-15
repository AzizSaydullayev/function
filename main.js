function getLargerNumber() {

    const num1 = Number(prompt("Введите первое число:"));
    const num2 = Number(prompt("Введите второе число:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Ошибка: введите корректные числа.");
        return;
    }
    
    const larger = num1 > num2 ? num1 : num2;
    
    console.log(larger);
    return larger;
}

getLargerNumber();
