// constructor
function CarMaker() {
	this.type = "car";
}

CarMaker.prototype.drive = function(){
	return "Beep Beep, I am a" + this.type;
};

CarMaker.factory = function(type){
	var newcar;

	if(CarMaker[type] !== 'function'){
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
	this.name = "Compact";
	this.doors = 4;
};

CarMaker.SUV = function(){
	this.name = "SUV";
	this.doors = "5";
};

CarMaker.Convertible = function(){
	this.name = "Convertible";
	this.doors= 2;
};