function generateNumbers(array1, array2) {
	var b  = 0, a = array1, ab = array2,
			randA = Math.floor(Math.random()*a.length),
			randAB = Math.floor(Math.random()*ab.length);

	b = ab[randAB] - a[randA];
	return ab = [a[randA], b];
}

function numberToInput() {
	var number = document.getElementsByClassName("question__operand_result")[0],
			input = document.createElement('input');
			question = number.parentNode;

	input.setAttribute('type', 'text');
	addClass(input, 'input_result');

	question.removeChild(number);
	question.appendChild(input);

	return input;
}

function inputToNumber(input, cls) {
	var input = input,
			number = document.createElement('span'),
			question = input.parentNode,
			classEl = cls;

	addClass(number, classEl);

	question.removeChild(input);
	question.appendChild(number);

	return number;
}

//функция для отрисовки стрелки
function drawCanwas(element, unitLenght, number) {
	var canvas = element,
			canvasWidth = number * unitLenght,
			radius = (canvasWidth/2)/Math.sin(degToRad(67.5)),
			canvasPadding = Math.floor(Math.sqrt(Math.pow(radius, 2) - Math.pow(canvasWidth/2, 2))),
			canvasHeight = radius - canvasPadding;

	ctx = canvas.getContext('2d');
	canvas.height = canvasHeight;
	canvas.width  = canvasWidth;
	ctx.strokeStyle = '#ff0000';
	ctx.beginPath();
	ctx.arc(canvasWidth/2,radius+1,radius,1.125*Math.PI,1.875*Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(canvasWidth, canvasHeight);
	ctx.lineTo(canvasWidth - 4, canvasHeight - 14);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(canvasWidth, canvasHeight);
	ctx.lineTo(canvasWidth - 9, canvasHeight - 10);
	ctx.stroke();
}

//функция отрисовывает сгенерированные числа в блоке question
function generateQuestion(arrNumbers) {
	var firstnumber = document.getElementsByClassName("question__operand_first-number")[0],
			secondNumber = document.getElementsByClassName("question__operand_second-number")[0],
			number1 = document.createTextNode("" + arrNumbers[0] + ""),
			number2 = document.createTextNode("" + arrNumbers[1] + "");

			firstnumber.appendChild(number1);
			secondNumber.appendChild(number2);
}

//генерирует ответ
function generateAnswer(arrNumbers, enterNumber) {
	var answer = document.getElementsByClassName("question__operand_result")[0],
			number1 = arrNumbers[0],
			number2 = arrNumbers[1],
			sum = number1 + number2,
			checkSum = number1 + enterNumber*1;

			console.log(number1);

	answer.innerHTML = '';

	if(sum === checkSum) {
		answer.style.color = '';
		answer.innerHTML = sum;
	} else {
		answer.style.color = 'red';
		answer.innerHTML = checkSum;
	}
}

// функция добавляет див с canvas
function getArrow(number) {
	var form  = document.getElementsByClassName("form")[0];

	//создаем элемент div и присваем класс form__arrow-wrap
	var div = document.createElement("div");
	addClass(div, "form__arrow-wrap");

	//создаем элемент input и присваем 
	var input = document.createElement("input");
	addClass(input, "form__input");
	input.setAttribute("type", "text");

	//создаем элемент canvas и присваем уникальный класс
	var canvas = document.createElement("canvas");
	addClass(canvas, "test__canvas" + number);
	//рисуем стрелку
	drawCanwas(canvas, 39, number);

	//добавление холста с инпутом в форму
	var test2  = document.getElementsByClassName("test2")[0];
	div.appendChild(input);
	div.appendChild(canvas);
	form.appendChild(div);
}