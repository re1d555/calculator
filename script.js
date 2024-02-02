            // console.log('operandA: ' + typeof(operandA) + ': ' + operandA);
            // console.log('operator: ' + operator);
            // console.log('operandB: ' + typeof(operandB) + ': ' + operandB);
            // console.log('result: ' + result);
            // console.log('previousResult: ' + previousResult);

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

            function playSound() {
                const audio = document.querySelector(`audio[data-key="18"]`);
                const key = document.querySelector(`.cBtn[data-key="18"]`);
                if (!audio) return;
                audio.currentTime = 0;
                key.classList.add('playing');
                audio.play();
            };

            function removeTransition(e) {
                if (e.propertyName !== 'transform') return;
                this.classList.remove('playing');
            }

            const keys = document.querySelectorAll('.cBtn');
            keys.forEach(key => key.addEventListener('transitionend', removeTransition));
            window.addEventListener('click', playSound);
            


            document.querySelectorAll('.operator').forEach((button) => button.addEventListener('click', (e) => {
    // 
                if (result != '') {
                    operator = '';
                }
    // click on operator instead of equality for result and save operator for next operation
                if (operandA != '' && operandB != '') {
                    equal()
                    operator = e.target.textContent;
                } operator = e.target.textContent; 
                previousResult = '';
            }));
            
            document.querySelectorAll('.operand').forEach((button) => button.addEventListener('click', (e) => {
    // save result of operation for use it in next operation
                // if (operandA.length > 7) {
                //     return;
                // }
                if (previousResult != '') {
                        operandA = '';
                    } previousResult = '';
    // delete bug with 0 before numbers
                    if (operandA == 0) {
                        operandA = '';
                    }
                    if (operandB == 0) {
                        operandB = '';
                    }
    // limited display by 8 symbols
                    if (operator == '') {
    // delete last operand symbol bag
                        if (operandA.length < 8) {
                            operandA = operandA.substring(0, 7);
                            operandA += e.target.value;
                            display.textContent = operandA;
                        }
                    } else {
                        if (operandB.length < 8) {
                            operandB = operandB.substring(0, 7);
                            operandB += e.target.value;
                            display.textContent = operandB;
                        }
                    }

                    console.log('operandA: ' + typeof(operandA) + ': ' + operandA);
                    console.log('operator: ' + operator);
                    console.log('operandB: ' + typeof(operandB) + ': ' + operandB);
                    console.log('result: ' + result);
                    console.log('previousResult: ' + previousResult);
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
                    operandA = operandA.toString().slice(0, -1);
                    display.textContent = operandA;
                } else {
                    operandB = operandB.toString().slice(0, -1);
                    display.textContent = operandB;
                }
            display.textContent = 0;
                console.log('operandA: ' + typeof(operandA) + ': ' + operandA);
                console.log('operator: ' + operator);
                console.log('operandB: ' + typeof(operandB) + ': ' + operandB);
                console.log('result: ' + result);
                console.log('previousResult: ' + previousResult);
            });

            function equal() {
    // if operands are empty then equal() do nothing
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

            console.log('operandA: ' + typeof(operandA) + ': ' + operandA);
            console.log('operator: ' + operator);
            console.log('operandB: ' + typeof(operandB) + ': ' + operandB);
            console.log('result: ' + result);
            console.log('previousResult: ' + previousResult);


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
    // result limited by 8 symbols
            function operate(opdA, opdB, oper) {
                if (oper == '+') {
                    result = add(+opdA, +opdB);
                    return result.toString().substring(0, 8);
                } else if (oper == '-') {
                    result = sub(opdA, opdB);
                    return result.toString().substring(0, 8);
                } else if (oper == '*') {
                    result = mul(opdA, opdB);
                    return result.toString().substring(0, 8);
                } else if (oper == '/') {
                    result = div(opdA, opdB);
                    return result.toString().substring(0, 8);
                }
            }
            