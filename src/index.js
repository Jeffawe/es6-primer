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

/**Simple asynchronous programming using callback function and setTimeout */
setTimeout(
    ()=> {
        logger("Timeout is over")
    }, 3000
);

logger("This is meant to come after setTimeout()");


new Promise((resolve, reject) => {
    setTimeout(
        () => {
            resolve("Timeout is now over")
        }, 1000
    )
}).then((data) => {
    logger ({data})
}).catch((error) =>{
    logger({error})
})


let url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1
fetch(url)
    .then(response => response.json()) //convert data returned to json
    .then(data => log(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data
    .catch(error => log(`Error: ${error}`));


let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json())
let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json())
let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())
Promise.all([fetch1,fetch2,fetch3])//get the data for the three calls in an array.
    .then((data)=>{
    logger(`User1 = ${data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array
    })

/**Async/await */
const promiseAwareTimeout = (milliseconds=1000) => { 
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`Timeout of ${milliseconds} milliseconds is over`);
    }, milliseconds) //set timeout for passed milliseconds. Defaults to 1000
    });
}

    //define a function that uses our Promise executor
const usePromiseAwareTimeout = async (milliseconds) => {
    logger('About to call timeout')
    try{
        logger(await promiseAwareTimeout(milliseconds));
    }catch(error){
        logger(error);
    }
    };

//call the async function.
usePromiseAwareTimeout(3000);


/**
let usersUrl = 'https://jsonplaceholder.typicode.com/users/';

const getUserById = async (userId) => { //user id parameter is expected
    let url = usersUrl + userId; //get the specific url for the user to fetch

    const response = await fetch(url); //make a call to the asynchronous fetch()
    const data = await response.json(); //make a call to the asynchronous conversion to json.
    log (data.name); //log the feedback.
}

getUserById(2); //This should display 'Ervin Howell' on the browser.
*/

let usersUrl = 'https://jsonplaceholder.typicode.com/users/';

const getUserById = async (userId = 1) => {
    let url = usersUrl + userId;

    try{
        const response = await fetch(url);
        const data = await response.json();
/*
The if statement below is to ensure that errors like URL not found (ie Error 404) is caught.
fetch() unfortunately does not send a Promise.reject() in such a case.
So here, we are throwing exception if HTTP response status is
outside the OK range (the 2xx range are OK), so that it can be caught.
*/
        if (response.status >= 200 && response.status < 300){
            logger(data.name); //do whatever you want with the data. You can even pass to other functions to do some work

        }else{  
            throw Error(response.status);//make sure that the error is not ignored by the catch() statement below.
        }
    }catch(error){
        logger(`Error: ${error}`);
    }
}

getUserById(2);

getUserById();