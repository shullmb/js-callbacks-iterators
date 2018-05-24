var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

// Your code here!
var isCool = function (person) {
	return person.coolnessScore > 20;
}

var coolPeople = people.filter(isCool);

coolPeople.forEach(function(person){
	console.log(person.name + ' is cool');
})

// Write code that uses the filter function, and the below isCool function to return a list of people who are cool.



// Example results:
//
// Bob is cool
// Isolde is cool
