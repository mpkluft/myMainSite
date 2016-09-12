//диапазон заданный диапазон чисел
var a  = [6, 7, 8, 9],
		ab = [11, 12, 13, 14];

var result = generateNumbers(a, ab);

getArrow(result[0]);

generateQuestion(result);

var input = document.getElementsByClassName("form__input");

addEvent(input[0], 'input', function(){

	var input = document.getElementsByClassName("form__input"),
			firstOperand = document.getElementsByClassName("question__operand_first-number")[0],
			secondOperand = document.getElementsByClassName("question__operand_second-number")[0],
			numberA = result[0],
			value = input[0].value;

	if(value == numberA) {	
		input[0].style.color = 'black';
		input[0].setAttribute('disabled', 'disabled');
		firstOperand.style.background = '';
		getArrow(result[1]);

		addEvent(input[1], 'input', function(){

			var input = document.getElementsByClassName("form__input"),
					numberB = result[1],
					value = input[1].value;

			if(value == numberB) {	
				input[1].style.color = 'black';
				input[1].setAttribute('disabled', 'disabled');
				secondOperand.style.background = '';
				numberToInput();
				
				
				var inputAnswer = document.getElementsByClassName('input_result')[0];
				addEvent(inputAnswer, 'input', function(){
					var input = document.getElementsByClassName('input_result')[0],
							numberA = result[0],
							numberB = result[1],
							enterNumber = input.value,
							sum = numberA + numberB,
							checkSum = numberA + enterNumber*1;

					if(sum === checkSum) {
						
						var number = inputToNumber(input, 'question__operand question__operand_result');
						number.innerHTML = checkSum;
						number.style.color = 'red';
					} else {
						//alert("Hello");
					}
					

				});


			} else {
				input[1].style.color = 'red';
				secondOperand.style.background = 'orange';
			}

		});

	} else {
		input[0].style.color = 'red';
		firstOperand.style.background = 'orange';
	}

});