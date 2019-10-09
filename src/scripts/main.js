// Question 1
// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

const car = {
  make: "Ford", 
  type: "Mustang",
  Year: 2015,
  color: "red"
};

// Question 2
// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

// Question 3
// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

const dad = {
gender: "Male",
age: 68,
profession: "Teacher"
}

const mom = {
  gender: "Female",
  age: 66,
  profession: "Principal"
}

const son = {
  gender: "Male",
  age: 26,
  profession: "McDonalds"
}

const daughter = {
  gender: "Female",
  age: 16,
  profession: "Student"
}

const familyMembers = [dad, mom, son, daughter];

console.log(familyMembers);
