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
            const delBtn = document.querySelector('.del');
            const onOffBtn = document.querySelector('.onOff');
            
            onOffBtn.addEventListener('click', () => {
                if (display.textContent == '') {
                    display.textContent = 0;
                } else if (display.textContent != '') {
                    display.textContent = display.textContent.substring(0);
                    display.textContent = '';
                } 
                
            })

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
                        operandA = operandA.substring(0, 8);
                        operandA += e.target.value;
                        display.textContent = operandA;
                    } else {
                        operandB = operandB.substring(0, 8);
                        operandB += e.target.value;
                        display.textContent = operandB;
                    }
            }));
          
            clearBtn.addEventListener('click', () => {
                operandA = '';
                operandB = '';
                operator = '';
                display.textContent = 0;
            });

            delBtn.addEventListener('click', () => 
            {   
                if (operator == '') {
                    operandA = operandA.slice(0, -1);
                    display.textContent = operandA;
                } else {
                    operandB = operandB.slice(0, -1);
                    display.textContent = operandB;
                }

                // if (operandA == '' || operandB == '') {
                //     display.textContent = 0;
                // }
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
                    result = add(+opdA, +opdB);
                    return result.toString().substring(0, 9);
                } else if (oper == '-') {
                    result = sub(opdA, opdB);
                    return result.toString().substring(0, 9);
                } else if (oper == '*') {
                    result = mul(opdA, opdB);
                    return result.toString().substring(0, 9);
                } else if (oper == '/') {
                    result = div(opdA, opdB);
                    return result.toString().substring(0, 9);
                }
            }
            