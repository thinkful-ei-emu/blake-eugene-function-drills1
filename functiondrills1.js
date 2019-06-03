
function createGreeting(name, age) {
    return "Hi, my name is" + name + " and Im " + age " years old"
    
}

function getYearOfBirth(name, age) {
    const yearOfBirth = 2019 - age;
    return "I was born in " + yearOfBirth;
}
const greeting1 = createGreeting();
console.log(greeting1);



