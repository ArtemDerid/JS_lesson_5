function makeBuffer() {
	var string = '';
	return {
		add : function(input) {
			if (arguments.length == 0) {
				return string;
			}
			string += input;
		},
		clear : function(){
			string = '';
		}
	}
}

//create new buffer
var buffer = makeBuffer();

//add some text to the string
buffer.add("JavaScript");
buffer.add(" Вчити ");
buffer.add("Потрібно!");

//show the result
console.log(buffer.add());
console.log("-------------------");

//clear buffer
buffer.clear();

//work with numbers
buffer.add(0); 
buffer.add(1); 
buffer.add(0);

console.log(buffer.add());
console.log("-------------------");

buffer.clear();

buffer.add("Тест"); 
buffer.add(" тебе не з'їсть"); 
console.log(buffer.add());
console.log("-------------------");

//show 'empty' string
buffer.clear();
console.log(buffer.add());
console.log("-------------------");
