// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

console.log("1:");
let person : string = 'Vardan'
console.log(`Hello ${person} are you interested learning machine learning and neural networks?`);









// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let friend: string = 'shahbaz achakzai';
console.log("2:");


console.log(friend.toUpperCase());
console.log(friend.toLowerCase());

let friendArray : string[] = friend.split(' ');

for (let i = 0; i < friendArray.length; i++) {
    friendArray[i] = friendArray[i].charAt(0).toUpperCase() + friendArray[i].slice(1)
}

let friendStr : string = friendArray.join(' ')
console.log(friendStr);









// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

console.log("3:");

let famousQuote : string = '"It is persistance in the face of failure that makes me great"'
console.log('Albert Einstein once said, '+ famousQuote);









// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

console.log("4:");

let famousPerson : string = 'Albert Enistein'

console.log(famousPerson + " once said, " + famousQuote) ;








// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

console.log("5:");

let falsyName : string = ' United States \t \n'
console.log(falsyName);
let trulyName : string = falsyName.trim()
console.log(trulyName);







// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("6:");


console.log(2 + 6);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);








// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log('7:');


let favNumber : number = 12
console.log(`My Favorite Number is ${favNumber}`);










// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

console.log('8:');

let namesArray : string[] 
namesArray = ['Shahbaz', 'Bilal', 'Abdullah', 'Wajeeh']
console.log(namesArray[0]);
console.log(namesArray[1]);
console.log(namesArray[2]);
console.log(namesArray[3]);






// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log('9:');

for (const name of namesArray) {
    console.log(`Good luck for the future ${name}.`);   
}








// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.


console.log('10:');

let MyfavourateTransport : string[] = ['Lexus', 'Hayabusa', 'Mayabach']
for (const toy of MyfavourateTransport) {
    console.log(`By 2030 i would like to own ${toy}.`);
    
}








// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("11:");

let guestList : string[] = ['Shahbaz', 'Bilal', 'Abdullah', 'Wajeeh'];
for (const guest of guestList) {
    console.log(`Hello ${guest}, I am iniviting you to dinner at my place`);
}


// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

console.log(`Sorry guys ${guestList[3]} wont to able to join us for the dinner.`);

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

guestList[3] = 'Saqib'

// Print a second set of invitation messages, one for each person who is still in your list.

for (const guest of guestList) {
    console.log(`Hello ${guest}, I am iniviting you to dinner at my place`);
}









// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log('12: ');

// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log('A little announcemnet guys, i just found a bigger dinning table so we may be having one more friend with us.');


//  Add one new guest to the beginning of your array
guestList.unshift('Farhan')
guestList.splice(3, 0, 'Hidayat')


// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
for (const guest of guestList) {
    console.log(`Hello ${guest}, I am iniviting you to dinner at my place`);    
}









// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log('13: ');


console.log('Sorry friends new table cant arrive before dinner so we will be having only two guests.');


// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

let guestCantBeInvited: string | undefined 
guestCantBeInvited = guestList.pop()
console.log(`Sorry, ${guestCantBeInvited} You are not invited`);

guestCantBeInvited = guestList.pop()
console.log(`Sorry, ${guestCantBeInvited} You are not invited`);

guestCantBeInvited = guestList.pop()
console.log(`Sorry, ${guestCantBeInvited} You are not invited`);

guestCantBeInvited = guestList.pop()
console.log(`Sorry, ${guestCantBeInvited} You are not invited`);


// Print a message to each of the two people still on your list, letting them know they’re still invited.
for (const guest of guestList) {
    console.log(`Hello ${guest}, I am iniviting you to dinner at my place`);    
}

guestList = []

console.log(guestList);









// Seeing the World: Think of at least five places in the world you’d like to visit.

const placesToVisitBy2030 : string[] = ['Canada', 'Japan', 'Norway', "Australia", 'India']

// Store the locations in a array. Make sure the array is not in alphabetical order.


// Print your array in its original order.

console.log(placesToVisitBy2030)

// Print your array in alphabetical order without modifying the actual list.
let sortedArray : string[] = placesToVisitBy2030.sort()
console.log(sortedArray)


// Show that your array is still in its original order by printing it.
console.log(placesToVisitBy2030);



// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(placesToVisitBy2030.reverse());


// Show that your array is still in its original order by printing it again.
console.log(placesToVisitBy2030);


// Reverse the order of your list. Print the array to show that its order has changed.
let reversedArray : string[] = sortedArray.reverse()
console.log(reversedArray);


// Reverse the order of your list again. Print the list to show it’s back to its original order.

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.











// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const citiesToVisit: string[] = []


function citiesVisit(param : string, param1 : string, param2 : string) : string[] {
    citiesToVisit.push(param, param1, param2)
    return citiesToVisit
}

citiesVisit('Rome', 'Oslo', 'Tokyo')


console.log(citiesToVisit);












// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

function createObject(name : string){
    let friend = {
    name : name,
}
    return friend
}

console.log(createObject('Shahbaz'));










// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.

let isHoliday : boolean = true

if (isHoliday) {
    console.log('Go to McDonalds')
} else {
    console.log('Stay Home');
    
}

let isPaid : boolean = false

if (isPaid) {
    console.log('Activate Suscription');
} else {
    console.log('Ask to pay for suscription');
}


let isHungry : boolean = false

if (isHungry){
    console.log('Ask for lunch?');
} else {
    console.log('Ask for dessert / coffee / chai.');
}


let isOnline : boolean = false

if (isOnline) {
    console.log('Text on social media');
} else {
    console.log('Call on cellphone');
}


let isProgrammer : boolean = true 

if (isProgrammer){
    console.log('Ask to develop a ecommerce Website');
} else {
    console.log('Advise : Learn to code!');   
}





// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

let programmer: string = 'Vardan kumar'
if(programmer === 'Vardan kumar'){
    console.log('We will learn to code in web 3.0');
} else {
    console.log('We will learn to code in web 2.0');
}



// • Tests using the lower case function
if(programmer.toLowerCase() === 'Vardan Kumar'){
    console.log(true);
} else {
    console.log(false);
    
}

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
if (11 >= 9) {
    console.log(true);
} false


// • Tests using "and" and "or" operators
if (11 >= 10 && 10 >= 9){
    console.log(true);
} false


// • Test whether an item is in a array
let items = ['papaya', 'orange', 'apple', 'cherries']
if( 'mango' in items){
    console.log(true);
} false

// • Test whether an item is not in a array
if(!("orange" in items)){
    console.log(true);
} false














// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let alien_color : string = 'red'
let playerPoints : number = 0


//  Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color == 'green'){
    playerPoints = 5
    console.log(`Player just earned ${playerPoints} points`);  
}



//  Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if (alien_color == 'green'){
    playerPoints = 5
    console.log(`Player just earned ${playerPoints} points`);  
} else {
    console.log('players lost the guess game');
}














// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.

if (alien_color == 'green'){
    playerPoints += 5
    console.log(`Player just earned ${playerPoints} points`);  
} else if (alien_color == 'yellow'){
    playerPoints += 10
    console.log(`Player just earned ${playerPoints} points`);
} else if (alien_color == 'red'){
    playerPoints += 15
    console.log(`Player just earned ${playerPoints} points`);
} 

// If the alien is yellow, print a message that the player earned 10 points.

// If the alien is red, print a message that the player earned 15 points.

// Write three versions of this program, making sure each message is printed for the appropriate color alien.











// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

let age:number = 24

// If the person is less than 2 years old, print a message that the person is a baby.
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// If the person is age 65 or older, print a message that the person is an elder.


if (age < 2) {
    console.log('The person is a baby');   
}
else if (age < 4) {
    console.log('The person is a toddler');   
}
else if (age >= 4 && age < 13) {
    console.log('The person is a kid');   
}
else if (age >= 13 && age < 20) {
    console.log('The person is a teenage');   
}
else if (age >= 20 && age <= 65) {
    console.log('The person is a adult');   
}
else {
    console.log('The person is an elder');
    
}












// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


let favourite_fruits : string[] = [];
favourite_fruits.push('Banana', 'Apple', "Orange")
if ('Banana' in favourite_fruits){
    'Bananas are a great source for carbohydrates'
}
if ('Orange' in favourite_fruits){
    'oranges are a great source for vitamins'
}
if ('Apple' in favourite_fruits){
    'Apples are a great source for iron'
}
if ('Cheery' in favourite_fruits){
    'Cheeries are a great to have'
}
if ('Peach' in favourite_fruits){
    'Peaches are good.'
}















// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.



let usernames : string[] = ['admin', 'eric', 'joseph', 'alex', 'mark']

for (let name of usernames) {
    if (name === 'admin') {
        console.log(`hello ${name}, would you like to see a status report?`);
    } else {
        console.log(`hello ${name}, thank you for logging in`);
    }
}










// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
usernames = []
if (usernames.length === 0) {
    console.log('We need to find some users');
}











// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let current_users: string[] = ["Shahbaz", "Nadia", "Abdullah", "Bilal", "Farhan"]
let new_users: string[] = ['Ali' ,'Annas', 'Abbas', 'Bilal', 'Farhan']

for (let i = 0; i < new_users.length; i++) {
    if (new_users[i] in current_users) {
        console.log('Person will have to enter a username')
    } else {
        console.log('Username is available');
        
    }
}












let ordinalNumbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinalNumbers.length; i++) {
    if (ordinalNumbers[i] === 1) {
        console.log('1st');        
    } else if (ordinalNumbers[i] === 2){
        console.log('2nd');        
    }
    else if (ordinalNumbers[i] === 3){
        console.log('3rd');        
    }
    else if (ordinalNumbers[i] === 4){
        console.log('4th');        
    }
    else if (ordinalNumbers[i] === 5){
        console.log('5th');        
    }
    else if (ordinalNumbers[i] === 6){
        console.log('6th');        
    }
    else if (ordinalNumbers[i] === 7){
        console.log('7th');        
    }
    else if (ordinalNumbers[i] === 8){
        console.log('8th');        
    }
    else if (ordinalNumbers[i] === 9){
        console.log('9th');        
    }
}














// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizza : string[] = ['Tikka', 'Pepporoni', 'Fajita']

for (let i = 0; i < pizza.length; i++) {
    console.log(`I love ${pizza[i]} pizza. `);
}
console.log('Pizza is lifeline for  Pakistani Programmers')















// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let catGene : string[] = ['Cat', 'Leopard', 'Lion']

for (let i=0; i<catGene.length; i++){
    console.log(`${catGene[i]} should not be a pet animal.`);
}

console.log('They all come from one origin breed.');












// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size : number, text : string) : string {
    return `The shirts size is ${size} and ${text} will be printed on it.`
}

console.log(22, "Boysss");











// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.












// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.



function describe_city(city : string, country : string = 'Canada') {
    return `${city} is in ${country}.`
}

console.log(describe_city('Alberta', "Canada"));
console.log(describe_city('Vancouver', "Canada"));
console.log(describe_city('Toronto'));











// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string): string {
    return `${city}, ${country}`
}



console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Islamabad', 'Pakistan'));









// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.



function make_album(artist_name : string, album_title : string, number_of_tracks? : number) {
    let album = {
        artist_name : album_title,
    }
    if(number_of_tracks){
        album['tracks'] = number_of_tracks
    }
    return album
}

console.log(make_album('Rahat Fateh Ali Khan' , 'Aafreen'));
console.log(make_album('Arijit Singh' , 'song'));
console.log(make_album('Rahat Fateh Ali Khan' , 'Aafreen', 2));










// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magicians :  string[] = ["Steve Jobs", "Elon Musk", "Deng Xio Peng"];

function show_magicians(magicians : string[]){
    for (let i = 0; i < magicians.length; i++){
        console.log(magicians[i]);
    }
    return  
}
show_magicians(magicians)















// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.



function make_great(magicians: string[]) {
    for (var i = 0; i < magicians.length; i++){
        console.log(`The Great ${magicians[i]}.`)
    }
    return
}

make_great(magicians)












// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



















// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.




















// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


function cars(model : string, manufacturer: string, ...color: any){
    let car = {
        model: model,
        manufacturer : manufacturer,
        color : color,
    }
    return car
}

console.log(cars('fortuner', 'Toyota', 'Silver'))