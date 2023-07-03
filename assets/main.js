createCode = () => {
    const codeBox = document.getElementById("code");
    const length = 8;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const allChars = upperCase + numbers

    let code = "";
    code += upperCase[Math.floor(Math.random() * upperCase.length)];
    code += numbers[Math.floor(Math.random() * numbers.length)];

    while(length > code.length){
        code += allChars[Math.floor(Math.random() * allChars.length)];
    }

    codeBox.value = code;

    JsBarcode('#barcode', code, {
        format: 'code128',
        displayValue: false,
        margin: 10,
    });
}
