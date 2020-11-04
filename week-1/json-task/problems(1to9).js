let obj = {name : "RajiniKanth", age : 33, hasPets : false};

//	1).	Parsing an JSON object’s Values:
   console.log(printAllValues(obj))
   
	function printAllValues(obj) {
		let values = []
		for(let key in obj){
			values.push(obj[key]);
		}
		return values;
		// return Object.values(obj);
	}  
   
   
//  2).	Parsing an JSON object’s Keys:
   console.log(printAllKeys(obj))
   
	function printAllKeys(obj) {
		let keys = []
		for(let key in obj){
			keys.push(key);
		}
		return keys;
		// return Object.keys(obj);
	}

//	3).	Parsing an JSON object and convert it to a list:
   console.log(convertObjectToList(obj))
   
	function convertObjectToList(obj) {
		let arrList = []
		for(let key in obj){
			let arr = []
			arr.push(key);
			arr.push(obj[key]);
			arrList.push(arr);
		}
		return arrList;
		// return Object.entries(obj);
	}
	
//	4). Parsing a list and transform the first and last elements of it:
   let arr = ["GUVI", "I", "am", "a geek"];
   console.log(transformFirstAndLast(arr));
	
	function transformFirstAndLast(arr) {
		let newObject = {};
		newObject[arr.shift()] = arr.pop();
		return newObject;
	}
	
//	5.	Parsing a list of lists and convert into a JSON object:
	let arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
	console.log(fromListToObject(arr));
	
	function fromListToObject(arr) {
		let newObject = {};
		for(let value of arr ){
			newObject[value[0]] = value[1];
		}
		return newObject;
		//  Object.fromEntries(arr);
	}
	
//	6.	Parsing a list of lists and convert into a JSON object:
	let arr= [
				[	["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]	],
				[	["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]	]
			];
	console.log(transformEmployeeData(arr));
	function transformEmployeeData(arr) {
		let tranformEmployeeList = [];
		for(let object of arr ){
			tranformEmployeeList.push(fromListToObject(object));
		} 
		return tranformEmployeeList;
	}
	
	function fromListToObject(arr) {
		let newObject = {};
		for(let value of arr ){
			newObject[value[0]] = value[1];
		}
		return newObject;
		//  Object.fromEntries(arr);
	}
	
//	7.	Parsing two JSON objects and Compare:
	let expected = {foo: 5, bar: 11};
	let actual = {foo: 5, bar: 6}
	console.log(assertObjectsEqual(expected,actual,"detects that two objects are equal"));

	function assertObjectsEqual(actual, expected, testName){
		let flag = true;
		for(let key in expected){
			if(expected[key] !== actual[key]){
				flag = false;
				break;
			}
		}
		if(flag){
			return "Passed";
		}
		else{
			return "FAILED [my test] Expected " + JSON.stringify(expected) + ", but got " + JSON.stringify(actual);
		}
	}
	
//	8.	Parsing JSON objects and Compare:

	let securityQuestions = [
		{
		question: "What was your first pet’s name?",
		expectedAnswer: "FlufferNutter"
		},
		{
		question: "What was the model year of your first car?",
		expectedAnswer: "1985"
		},
		{
		question: "What city were you born in?",
		expectedAnswer: "NYC"
		}
	]
	
   function chksecurityQuestions(securityQuestions,question,ans) {
		for(let quest of securityQuestions){
			if(quest["question"] === question){
				if(quest["expectedAnswer"] === ans)
					return true;
				else
					return false;
			}
		}
	return true;
   }
	   
   //Test case1:
   
   let ques = "What was your first pet’s name?";
   let ans  =  "FlufferNutter";
   
   let status = chksecurityQuestions(securityQuestions, ques, ans);
   
   console.log(status); // true
   
   
   //Test case2:
   
   ques = "What was your first pet’s name?";
   ans  =  "DufferNutter";
   
   status = chksecurityQuestions(securityQuestions, ques, ans);
   
   console.log(status); // flase
   
   
//	9).	Parsing JSON objects and Compare:
	var students = [
		{
		name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
		{name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
		{name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
		{name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
		{name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
		{name: "Devdas",age: 56} 
	];
	
   function returnMinors(arr)
   {
       let minorStudents = []
       for(let student of students){
            if(student.age < 20){
                minorStudents.push(student.name);
            }
       }
       return minorStudents;
   }
   console.log(returnMinors(students));
	