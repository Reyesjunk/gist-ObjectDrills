//1. Object initializers and methods
var loaf = {
	flour: 300,
	water: 210,
	hydration: function(){
		console.log("TEST");
		return (this.water/this.flour)*100;
	},

};
console.log(loaf.flour, loaf.water);
console.log(loaf.hydration);

//2. Iterating over an object's properties
var obj = {
	foo: 'dog',
	bar: 10,
	fum: 666,
	quux: 'cat',
	spam: 'goddess',
}
for(stuff in obj){
	console.log(`${stuff}: ${obj[stuff]}`);
}

//Arrays in objects
var dayMeals = {
	meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
}
console.log(`A hobbit's fourth meal of the day is ${dayMeals.meals[3]}.`)

//4. Arrays of objects
const fictionalCharacters =[
	{
		name: 'Arnold',
		job_title: 'movie star'},
	{
		name: 'Harry',
		job_title: 'wizard'},
	{
		name: 'Ozma',
		job_title: 'princess'},
	{
		name: 'Gwen',
		job_title: 'superheroine'},
	{
		name: 'Heathcliff', 
		job_title: 'caroon cat'},
	{
		name: 'TheBoss',
		job_title: 'President'}
];

for(var i = 0; i<fictionalCharacters.length; i++){
		console.log(`${fictionalCharacters[i].name} is a ${fictionalCharacters[i].job_title}`);
}
//5. Properties that aren't there

const fictionalEmployees =[
	{
		name: 'Arnold',
		job_title: 'movie star',
		boss: 'Harry'},
	{
		name: 'Harry',
		job_title: 'wizard',
		boss: 'Ozma'},
	{
		name: 'Ozma',
		job_title: 'princess',
		boss: 'Gwen'},
	{
		name: 'Gwen',
		job_title: 'superheroine',
		boss: 'Heathcliff'},
	{
		name: 'Heathcliff', 
		job_title: 'caroon cat',
		boss: 'TheBoss'},
	{
		name: 'TheBoss',
		job_title: 'President'}
];

for(var i = 0; i<fictionalEmployees.length; i++){
	let employee = fictionalEmployees[i].name;
	let job = fictionalEmployees[i].job_title;
	let boss = fictionalEmployees[i].boss;
	if(!boss){
		console.log(employee, job, "doesn't report to anybody");
	}
	else {
		console.log(employee, job, "reports to", boss);
	}
}

//6. Cracking the code
//Cracking the code
function code(message){
	var decode = message.split(" ").map(function(word){
	switch (word[0]) {
		case 'a': 
			return word[1];
			break;
		case 'b':
			 return word[2];
			break;
		case 'c':
			return word[3];
			break;
		case 'd':
			return word[4];
			break;
		default:
			return " ";
			break;
		}
	});
	console.log(decode.join(''));
}
code('craft block argon meter bells brown croon droop');

//7. Characters of the LOTR
function charLOTR(){
	const CHARACTERS = [
		{name: 'Gandolf the White',
		job: 'Wizard',
		location: 'Middle Earth',
		weapon: 'a Wizard Staff'},

		{name: 'Bilbo Baggings',
		job: 'Hobbit',
		location: 'Shire',
		weapon: 'the Ring'},

		{name: 'Frodo Baggins',
		job: 'Hobbit',
		location: 'Shire',
		weapon: 'a String and Barrow Blade'},

		{name: 'Aragon son of Arathon',
		job: 'Man',
		location: 'Dunnedain', 
		weapon: 'Anduril'},

		{name: 'Legolas',
		job: 'Elf',
		location: 'Woodland Realm',
		weapon: 'a Bow and Arrow'},
	];
	CHARACTERS.push({name: 'Arwen Undomiel', job: 'Half-Elf', location: 'Riverdell', weapon:'Handhafang'});
	
	for(var j = 0; j<CHARACTERS.length; j++){
		var char = CHARACTERS[j].name;
		var job = CHARACTERS[j].job;
		var location = CHARACTERS[j].location;
		var weapon = CHARACTERS[j].weapon;
		console.log(char, "is a", job, "of the", location, "who uses", weapon);
	}
}
charLOTR();



