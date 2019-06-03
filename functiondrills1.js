
function createGreeting(name, age) {
    if (typeof name === 'string' && typeof age === 'number'){
        return "Hi, my name is" + name + " and I'm " + age  + " years old";
    }
    else {
        throw new Error('arguments are not valid');

    }
}

function getYearOfBirth(age) {
    if (age < 0){
        throw new Error("Age can not be negative");    }
    const yearOfBirth = 2019 - age;
    return yearOfBirth
}

const greeting1 = createGreeting();
console.log(greeting1);



