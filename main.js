var prompt = require('prompt-sync')();

var questions = [
	{text: 'question1', answer: 'answer1'},
	{text: 'question2', answer: 'answer2'},
	{text: 'question3', answer: 'answer3'},
	// {text: 'question4', answer: 'answer4'},
	// {text: 'question5', answer: 'answer5'},
	// {text: 'question6', answer: 'answer6'},
	// {text: 'question7', answer: 'answer7'},
	// {text: 'question8', answer: 'answer8'},
	// {text: 'question9', answer: 'answer9'},
	// {text: 'question10', answer: 'answer10'},
	// {text: 'question11', answer: 'answer11'},
	// {text: 'question12', answer: 'answer12'},
	// {text: 'question13', answer: 'answer13'},
	// {text: 'question14', answer: 'answer14'},
	// {text: 'question15', answer: 'answer15'},
];

var answer;
var nCorrect = 0;
var nWrong = 0;
var percent;

for (var i = 0; i < questions.length; i++) {
	answer = prompt(questions[i].text);
	if (answer.toLowerCase() == questions[i].answer.toLowerCase()) {
		console.log('Correct!');
		nCorrect++;
	} else {
		console.log('Incorrect! The correct answer is ' + questions[i].answer);
		nWrong++
	}
}

var percent = (nCorrect / questions.length) * 100;
console.log('You answered ' + nCorrect + ' questions correctly');
console.log('You got ' + Math.floor(percent) + '% correct.')
