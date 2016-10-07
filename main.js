var prompt = require('prompt-sync')();

var questions = [
	{text: 'HTML is used to structure a webpage.', answer: 'True'},
	{text: 'CSS stands for Computer Style Sheets.', answer: 'False'},
	{text: 'Java and JavaScript are the same thing.', answer: 'False'},
	{text: 'The following will change text color to black: color: #fff.', answer: 'False'},
	{text: 'The <p> tag denotes a paragraph.', answer: 'True'},
	{text: 'The <h6> tag denotes the largest heading.', answer: 'False'},
	{text: 'The <bl> tag denotes a bulleted list.', answer: 'False'},
	{text: 'You should put the link to your stylesheet within the <header> tag', answer: 'False'},
	{text: '/* This is a CSS comment */', answer: 'True'},
	{text: 'The bgcolor property controls the background color of an element.', answer: 'False'},
	{text: 'The font-family property is used to specify the font of text in an element.', answer: 'True'},
	{text: '4 == \'4\'', answer: 'True'},
	{text: 'true and false are boolean values.', answer: 'True'},
	{text: 'undefined is a falsey value.', answer: 'True'},
	{text: 'NaN is not a number', answer: 'False'},
];

var answer;
var nCorrect = 0;
var nWrong = 0;
var percent;

console.log('Answer the following questions TRUE or FALSE');

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
