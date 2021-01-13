import logger, {
    appName, dummyFunction, genericFunction,
    multiplier, multiplier2, genericFunction2, Person,
    CustomMath, User
} from './tools.js';
import fetch from 'node-fetch';

logger("Welcome! We are having fun with modularity in JS");

//logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );
/** Introducing template literals */

logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}".`);

logger(genericFunction());

logger(multiplier(9));

try {
    const product = multiplier2(3);
    logger(product);
} catch (err) {
    logger(err.message)
}


logger(genericFunction2(2, 3, 4, 6, 8, 9, 10.5, 12));


let person1 = new Person("Pius", "Onobhayedo", "Male", 1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);

logger(person1.firstName);
logger(person2.firstName);

logger(`The initial height of ${person2.firstName} is ${person2.height}`);
person2.height = 1.7;
logger(`The new height of ${person2.firstName} is ${person2.height}`);

logger((CustomMath.sqrt(100)));

let user1 = new User("piuso", "mypassword", "Pius", "Onobhayedo", "Male", undefined);

logger(`The username of ${user1.firstName} is ${user1.username}`);