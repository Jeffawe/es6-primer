/*
var logger = function (output) {
    console.log(output);
};
*/
/**illustrating Arrow Functions */
/*
var logger = (output) => {
    console.log(output);
}
*/
/**illustrating scoping */
const logger = (output) => {
    console.log(output);
}


export const appName = "ES6 Review";

/*
export var dummyFunction = function () {
    return "I am a dummy function";
}
*/
/**illustrating Arrow Functions */
export const dummyFunction = () => {
    let feedback = "I am a dummy function";
    feedback = "I am still a dummy function";
    return feedback;

}

/* Destructuring */
/*
export const genericFunction = () => {
    const languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    const [firstLang, secondLang] = languages; //assign first element in languages array to firstLang and second element to secondLang.

    return `First language is ${firstLang} and the second is ${secondLang}`
}
*/

/* spread operator illustration with destructuring */

export const genericFunction = () => {
    const languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    const [firstLang, secondLang, ...otherLangs] = languages; //assign first element in languages array to firstLang and second element to secondLang.

    return `First language is ${firstLang}, the second is ${secondLang} and the rest are ${otherLangs}`
}



/* Default parameter passed to function */
export const multiplier = (a, b = 1) => {
    //This function multiplies any two numbers
    //if only one argument is sent as argument when function is called, b will default to 1.
    return (a * b);
}

export const multiplier2 = (...numbers) => {

    let product = 1;

    if (numbers.length < 2) {
        throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    //loop through using the old forEach approach which still works //numbers.forEach((number)=>{
    // product = product * number;
    //});
    //More elegantly we can replace the above forEach with ES6's for...of for(let number of numbers){
    for (let number of numbers) {
        product = product * number;
    }
    return product;
}

export const genericFunction2 = (m, c, ...x) => {
    //This function returns an array of {x,y} objects for all the x arguments passed.
    //Map the array of x into an array of {x,y} object, with the y value calculated each time.

    /*
        let myCoordinates = x.map(
            (xValue) => {
                const y = (m * xValue) + c;
                return {'x': xValue, 'y': y}
            }
        )
        */


    let coordinates = x.map((x) => {
        return { 'x': x, 'y': (m * x) + c };
    });

    //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for...of loop introduced in ES6 as shown below
    let output = 'The (x,y) values are as follows: '
    for (let coordinate of coordinates) {
        let xy = `(${coordinate.x},${coordinate.y})`
        //output += xy;
        output = output + xy
    }
    //Previous style...(Going forward, we shall only be using the new for...of loop in such scenario) //coordinates.forEach((coordinate)=>{
    // let xy = `(${coordinate.x},${coordinate.y})`;
    // output+=xy;
    //})
    return output;
}

export class CustomMath {
    static sqrt(a) {
        return Math.sqrt(a);
    }
    static pow(a, b) {
        return Math.pow(a, b);
    }
}

export class Person {
    constructor(firstName, lastName, gender, height) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
    }
};

export class User extends Person {

    constructor(username, password, firstName, lastName, gender, height) {

        super(firstName, lastName, gender, height);

        this.username = username;
        this.password = password;
    }
}



export default logger;