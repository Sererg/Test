const questions = [
	{
		question: "Вы постоянно бьетесь мизинцем об одно и тоже место?",
		answers: [
			"Нет",
			"Иногда",
			"Да",
			
		],
		correct: [1,2],
	},
	{
		question: "Вам доверяют сложные задания на работе?",
		answers: [
			"Нет",
			"Иногда",
			"Да",
			
		],
		correct: [3,2],
	},
	{
		question: "Вы считаете Гомера Симпсона адекватным персонажем?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [3],
	},
	{
		question: "Вы иногда ищете ручку, которая у вас в руке?",
		answers: [
			"Нет",
			"Иногда",
			"Да",
			
		],
		correct: [1,2],
	},
	{
		question: "Вы иногда забываете сколько вам лет?",
		answers: [
			"Нет",
			"Иногда",
			"Да",
			
		],
		correct: [2,3],
	},
	{
		question: "Вы часто просыпаете?",
		answers: [
			"Нет",
			"Да",
			
		],
		correct: [1],
	},
	{
		question: "Вы верите, что фокусники реальные маги?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [1],
	},
	{
		question: "Вы смотрите дом-2 ?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [1],
	},
	{
		question: "(28:7+5)+1*2 = ?",
		answers: [
			"9",
			"11",
			"13",
			"18",
			
		],
		correct: [2],
	},
	{
		question: "Вы умеете отделять белок от желтка?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [3],
	},
	{
		question: "Вы помните ваш точный адрес?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [3],
	},
	{
		question: "Вы помните для чего нужны логарифмы?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [3,2],
	},
	{
		question: "Эрих Мария Ремарк — женщина?",
		answers: [
			"Нет",
			"Да",
			
		],
		correct: [1],
	},
	{
		question: "Правда ли что быки бегут на красный цвет?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [1],
	},
	{
		question: "Видно ли китайскую стену из космоса?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [3],
	},
	{
		question: "Носят ли Ежики яблочки на иголках?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [1],
	},
	{
		question: "Килограмм гвоздей тяжелее, чем килограмм пуха?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [1],
	},
	{
		question: "Вы считаете себя тупым?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [1],
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: [2],
	},
	{
		question: "Является ли птеродактиль динозавром?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [3],
	},
	{
		question: "Вы считаете, что высшее образование никому не нужно?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [1],
	},
	{
		question: "Вы считаете, что математика в жизни не понадобится?",
		answers: [
			"Нет",
			"Немного",
			"Да",
			
		],
		correct: [1],
	},
	
];
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

 let score = 0; //правельные ответы 
 let questionIndex = 0; // текущий вопрос


clearPage()
showQuestion()
submitBtn.onclick = checkAnswer;

function clearPage(){
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}

function showQuestion(){   //вопрос
	console.log('showQuestion');
	const headerTemlate = `<h2 class="title">%title%</h2>`;
	const title = headerTemlate.replace(`%title%`,questions[questionIndex]['question']);
	headerContainer.innerHTML = title;

	//варианты ответов
	for([index,answerText] of questions[questionIndex]['answers'].entries()){  
 const questionTemplate = 
		`<li>
			<label>
				<input value="%number%" type="radio" class="answer" name="answer" />
				<span>%answer%</span>
			</label>
		</li>`

		const answerHTML = questionTemplate
		.replace(`%answer%`,answerText)
		.replace('%number%',index+1);
	listContainer.innerHTML = listContainer.innerHTML + answerHTML;

	}

}

function checkAnswer(){
	console.log('Нажата кнопка ответить');
	//находим кнопку
	const checkedRadio = listContainer.querySelector('input:checked');

	if(!checkedRadio){
		submitBtn.blur();
		return
	}
	//узнать номер отв
	const userAnswer = parseInt(checkedRadio.value)

	if(questions[questionIndex]['correct'].includes(userAnswer)) {
		score++;
	}
	console.log(score);
	if(questionIndex !== questions.length - 1 ){
		console.log('не последний вопрос');
		questionIndex++;
		clearPage();
		showQuestion();
		
	}else{
		console.log('последний вопрос');
		clearPage();
		showresults();
	}
}

function showresults(){
	let resultTemplate = 
		`<h2 class="title">%title%</h2>
		<h3 class="summary">%message%</h3>
		<p class="result">%result%</p>`
		;


	let title,message;

	if(score === questions.length){
		title = ' Поздравляем';
		message = 'Вы ответили верно на все,можете считать себя умный человеком!&#128170;&#128175;&#129311;&#129311;&#129311;';
	}	else if (score * 100 / questions.length >= 85){
		title = 'Очень маленькое количество ошибок'; 
		message = ' Вы не глупый человек, но нужно постараться, чтобы исправить маленькие недочеты &#128572;';
	}	else if (score * 100 / questions.length >= 50){
		title = 'Не плохой результат'; 
		message = ' Но еще чуть-чуть и можно назвать вас недалеким &#128569;&#128053;&#127770;';
	} else {
		title = ' Стоит постараться';
		message = 'Вы не знаете элементарных вещей &#128118;&#128575;&#128169;&#128169;&#128169;&#128575';
	}

	let result = `${score} из ${questions.length}`;

	const finelMessage = resultTemplate
										.replace(`%title%`, title)
										.replace(`%message%`, message)
										.replace(`%result%`, result)


	headerContainer.innerHTML = finelMessage;	
	
	submitBtn.blur();
	submitBtn.innerText = ' Начать заново';
	submitBtn.onclick = () =>{ history.go()};
}