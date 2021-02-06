function Person(first, last, age, gender, interests){ //Person is the constructor 
	this.name = {
		'first': first,
		'last': last
	};
	this.age = age;
	this.gender = gender;
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']); //instance object from the constructor

let person3 = new person1.constructor("Karen", "Stephenson", 26, "female", ["playing drums", "mountain climbing"]);

Person.prototype.farewell = function() { //new method added to the constructor's prototype
	alert(this.name.first + " has left the building. Bye for now!");
};

Person.prototype.fullName = this.name.first + " " + this.name.last; //returns undefined because this referred to the global scope, not the function scope

//Constructor with property definitions

function Test(a, b, c, d){
	//property definitions
}

//First method definition
Test.prototype.x = function(){};

//Second method definition
Test.prototype.y = function(){};