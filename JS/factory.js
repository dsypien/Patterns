// constructor
function CarMaker() {
	this.type = "car";
}

CarMaker.prototype.drive = function(){
	return "Beep Beep, I am a " + this.type;
};

CarMaker.factory = function(type){
	var newcar;

	if(typeof CarMaker[type] !== 'function'){
		throw {
			name: "invalid type",
			message : type + " doesn't exist"
		};
	}

	if(CarMaker[type].prototype.drive !== 'function'){
		CarMaker[type].prototype = new CarMaker();
	}

	newcar = new CarMaker[type]();
	return newcar;
};

CarMaker.Compact = function(){
	this.type = "Compact";
	this.doors = 4;
};

CarMaker.SUV = function(){
	this.type = "SUV";
	this.doors = "5";
};

CarMaker.Convertible = function(){
	this.type = "Convertible";
	this.doors= 2;
};

var suv = CarMaker.factory('SUV');
var comp = CarMaker.factory('Compact');
var conv = CarMaker.factory('Convertible');

console.log(suv.drive());
console.log(comp.drive());
console.log(conv.drive());