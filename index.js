import "./lib/envLoad.js";

//This function is to simulate the time to connect to a DataBase
//Use 'npm start' to run the project, and see the '.env' and envLoad.js files
const waitTwoSeconds = () => new Promise(resolve => setTimeout(resolve, 2000));

console.log("-----------Connecting to MySql DB-----------");
console.log(`Connecting with user:${process.env.DB_USER}`);
console.log(`Connecting with password:${process.env.DB_PASSWORD}`);
waitTwoSeconds()
.then(()=> {
    console.log(`You are connected. Acess it by:
http://${process.env.DB_PATH}${process.env.DB_USER}`)})
