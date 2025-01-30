const arr = document.querySelectorAll('.btn');
const outputScr = document.querySelector('.out-scr');

let ans = 0;
let curans = 0;
let operator = null;
let isDecimal = false;

arr.forEach(elem => {
    elem.addEventListener('click', () => {
        let ids = elem.id;

        if (ids === 'clear') {
            outputScr.textContent = '0';
            ans = 0;
            curans = 0;
            operator = null;
            isDecimal = false;
        } 
        
        else if (!isNaN(ids)) {
            if (isDecimal) {
                const decimalPart = parseFloat(`0.${ids}`);
                curans += decimalPart;
                isDecimal = false;
            } 
            else {
                curans = curans * 10 + parseInt(ids);
            }
            outputScr.textContent = curans;
        } 
        
        else if (ids === 'dot') {
            if (!isDecimal) {
                isDecimal = true;
                outputScr.textContent = `${curans}.`;
            }
        } 
        
        else if (['add', 'sub', 'mul', 'div', 'mod'].includes(ids)) {
            if (operator) {
                ans = calculate(ans, curans, operator);
            } else {
                ans = curans;
            }
            operator = ids;
            curans = 0;
            isDecimal = false;
            outputScr.textContent = ans;
        } 
        
        else if (ids === 'sq') {
            curans = curans ** 2;
            outputScr.textContent = curans;
        } 
        
        else if (ids === 'equal') {
            if (operator) {
                ans = calculate(ans, curans, operator);
                outputScr.textContent = ans;
                operator = null;
            }
            curans = 0;
        }

        else if (ids === 'del'){
            let temp = curans % 10
            curans -= temp
            curans /= 10
            ans = curans
            outputScr.textContent = curans
        }
    });
});

function calculate(a, b, op) {
    switch (op) {
        case 'add':
            return a + b;
        case 'sub':
            return a - b;
        case 'mul':
            return a * b;
        case 'div':
            return b !== 0 ? (a / b).toFixed(10) : 'Error';
        case 'mod':
            return b !== 0 ? a % b : 'Error';
        default:
            return a;
    }
}
