const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");

let funcPlus = () => {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    const plusResult = num1 + num2;
    result.textContent = plusResult;
}

let funcSub = () => {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    const plusResult = num1 - num2;
    result.textContent = plusResult;
}

let funcMulti = () => {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    const plusResult = num1 * num2;
    result.textContent = plusResult;
}

let funcDivi = () => {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    const plusResult = num1 / num2;
    result.textContent = plusResult;
}