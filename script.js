            // console.log('operandA: ' + typeof(operandA) + ': ' + operandA);
            // console.log('operator: ' + operator);
            // console.log('operandB: ' + typeof(operandB) + ': ' + operandB);
            // console.log('result: ' + result);

            let operandA = '';
            let operandB = '';
            let operator = '';
            let result = '';
            let previousResult = '';
    
            const display = document.querySelector('.display');
            const buttons = document.querySelectorAll('.cBtn');
            const operandBtn = document.querySelector('.operand');
            const operatorBtn = document.querySelector('.operator');
            const clearBtn = document.querySelector('.clear');
            const equalBtn = document.querySelector('.equal');
    
    
            document.querySelectorAll('.operator').forEach((button) => button.addEventListener('click', (e) => {
                if (result != '') {
                    operator = '';
                }
                if (operandA != '' && operandB != '') {
                    equal()
                    operator = e.target.textContent;
                } else {
                    operator = e.target.textContent;
                }  
                previousResult = '';
            }));
            
            document.querySelectorAll('.operand').forEach((button) => button.addEventListener('click', (e) => {
                    if (previousResult != '') {
                        operandA = '';
                    } previousResult = '';    
                    
                    if (operator == '') {
                        operandA += e.target.value;
                        display.textContent = operandA;
                    } else {
                        operandB += e.target.value;
                        display.textContent = operandB;
                    }
            }));
          
            clearBtn.addEventListener('click', () => {
                operandA = '';
                operandB = '';
                operator = '';
                display.textContent = '';
            });
    
            function equal() {
                if (operandA == '' || operandB == '') {
                    return;
                }
                display.textContent = operate(operandA, operandB, operator);
                operator = '';
                operandA = result;
                previousResult = result;
                result = '';
                operandB = '';
                if (display.textContent == Infinity) {
                    display.textContent = 'STOP IT!';
                }
            }
    
            equalBtn.addEventListener('click', equal);
    
    
            function add(a, b) {
                return a + b;
            }
            function sub(a, b) {
                return a - b;
            }
            function mul(a, b) {
                return a * b;
            }
            function div(a, b) {
                return a / b;
            }
    
            function operate(opdA, opdB, oper) {
                if (oper == '+') {
                    return result = add(+opdA, +opdB);
                } else if (oper == '-') {
                    return result = sub(opdA, opdB);
                } else if (oper == '*') {
                    return result = mul(opdA, opdB);
                } else if (oper == '/') {
                    return result = div(opdA, opdB);
                }
            }
            