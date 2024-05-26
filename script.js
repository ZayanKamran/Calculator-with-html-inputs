const addition = (e) => {
    e.preventDefault();
    let num1 = Number(document.getElementById("addNum1").value);
    let num2 = Number(document.getElementById("addNum2").value);
    let resultBox = document.getElementById("addResult");
    resultBox.value = num1 + num2;
}

const subtraction = (e) => {
    e.preventDefault();
    let num1 = Number(document.getElementById("subNum1").value);
    let num2 = Number(document.getElementById("subNum2").value);
    let resultBox = document.getElementById("subResult");
    resultBox.value = num1 - num2;
}

const multiplication = (e) => {
    e.preventDefault();
    let num1 = Number(document.getElementById("mulNum1").value);
    let num2 = Number(document.getElementById("mulNum2").value);
    let resultBox = document.getElementById("mulResult");
    resultBox.value = num1 * num2;
}

const division = (e) => {
    e.preventDefault();
    let num1 = Number(document.getElementById("divNum1").value);
    let num2 = Number(document.getElementById("divNum2").value);
    let resultBox = document.getElementById("divResult");
    resultBox.value = num1 / num2;
}
