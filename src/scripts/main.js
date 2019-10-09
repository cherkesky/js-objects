// Question 1
// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

const car = {
  make: "Ford",
  model: "Mustang",
  Year: 2015,
  color: "Red"
};
console.log("Car", car);

// Question 2
// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

console.log("Animals", animals);

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

console.log("Family Members", familyMembers);

// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
  height: 80,
  manufacturer: "Killibrew & Sons",
  contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
  depth: 38,
  width: 50
}

console.log(`Wardrode:
 Height: ${wardrobe.height} 
 Manufacturer: ${wardrobe.manufacturer}
 Content: ${wardrobe.contents} 
 Depth: ${wardrobe.depth} 
 Width: ${wardrobe.width}`);


//  Time to practice dot and square-bracket notation. Use the following object to complete the lightning exercises below.

const empireStateBuilding = {
  stories: 103,
  height: 1453,
  address: "350 Fifth Avenue, Manhattan, New York 10118",
  squareFeet: 2768591,
  constructionDate: 1931,
  cost: 40948900,
  owner: "Empire State Realty Trust",
  eastWestLength: 424,
  northSouthLength: 187,
  architect: "Shreve, Lamb & Harmon"
}

// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
console.log(`Empire State Building Dimensions :
 Height: ${empireStateBuilding.height} 
 SQFT: ${empireStateBuilding.squareFeet}
 East West Lenght: ${empireStateBuilding.eastWestLength} 
 North South Length: ${empireStateBuilding.northSouthLength} 
 `);

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.
console.log(`Empire State Building Additional Properties :
 Stories: ${empireStateBuilding["stories"]} 
 Address: ${empireStateBuilding["address"]}
 Construction Date: ${empireStateBuilding["constructionDate"]} 
 Cost: ${empireStateBuilding["cost"]} 
 Architect: ${empireStateBuilding["architect"]} 
 `);


