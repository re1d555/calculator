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
            const dot = document.querySelector('.dot');

    // animation and audio
            function removeTransition(e) {
                if (e.propertyName !== 'transform') return;
                this.classList.remove('playing');
            }

            const audio = document.querySelector(`audio[class="sound"]`);
            buttons.forEach(button => button.addEventListener('click', () => {
                if (!audio) return;
                audio.currentTime = 0;
                audio.play();
                button.classList.add('playing');
            }));          

            buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

    // calculator itself

            document.querySelectorAll('.operator').forEach((button) => button.addEventListener('click', (e) => {              
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
                if (previousResult != '') {
                        operandA = '';
                    } previousResult = '';

                    if (operator == '') {
                        if (operandA.length < 8) {
                            if (operandA.charAt(0) == 0) {
                                operandA = operandA.substring(1);
                            }
                            if (operandA.charAt(1) == '.') {
                                dot.value = '';
                            } else dot.value = '.'
                            operandA = operandA.substring(0, 7);
                            operandA += e.target.value;
                            display.textContent = operandA;
                        }
                    } else {
                        if (operandB.length < 8) {
                            if (operandB.charAt(0) == 0) {
                                operandB = operandB.substring(1);
                            }
                            if (operandB.charAt(1) == '.') {
                                dot.value = '';
                            } else dot.value = '.'
                            operandB = operandB.substring(0, 7);
                            operandB += e.target.value;
                            display.textContent = operandB;
                        }
                    }
            }));
          
            clearBtn.addEventListener('click', () => {
                operandA = '';
                operandB = '';
                operator = '';
                display.textContent = 0;
            });

            delBtn.addEventListener('click', () => 
            {   if (previousResult != '') {
                operandA = '';
                previousResult = '';
            }
                if (operator == '') {
                    operandA = operandA.toString().slice(0, -1);
                    display.textContent = operandA;
                } else {
                    operandB = operandB.toString().slice(0, -1);
                    display.textContent = operandB;
                }
    // set operands to 0 if they were delete completely
                if (display.textContent == '') {
                    display.textContent = 0;
                }
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