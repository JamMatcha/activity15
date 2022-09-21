//Session 15 Activity
//3. Create an addStudent() function that will accept a name of the student and add it to the student array.
let students = [];

function addStudent(name){
	students.push(name);
	console.log(name + " was added to the student's list.")
	//console.log("current content of arrayStudent is: " + students);
}
//4. Create a countStudents() function that will print the total number of students in the array.
function countStudents(){
	console.log("There are a total of " + students.length + " students enrolled.");
}
//5. Create a printStudents() function that will sort and individually print the students (sort and forEach methods) in the array.

function printStudents(){
	students.sort();
	//console.log(students);

	let listofStudents = students;
	listofStudents.forEach(function(list){
		console.log(list);
	})

	
}

//6. Create a findStudent() function that will do the following:
//Search for a student name when a keyword is given (filter method).

function findStudent(names){
	let enrolledStudents = students.filter(function(student){
		return student.toLowerCase().includes(names);	
	})		
	

	if(names == enrolledStudents)
	{
		console.log(names + " is an enrollee.");// - If one match is found print the message studentName is an enrollee.
	}

	else if(names == enrolledStudents.length){	
		console.log(enrolledStudents.join(',') + " are enrollees.")// - If multiple matches are found print the message studentNames are enrollees.

	}

	else{
		console.log("No student found with the name " +names+ ".");//    - If no match is found print the message studentName is not an enrollee.
	}
}
