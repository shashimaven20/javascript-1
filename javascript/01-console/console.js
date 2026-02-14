
//console object functions
console.log("This is a log message.");
console.info("This is an info message.");
console.warn("This is a warning message.");
console.error("This is an error message.");

console.table({name: "Shashi", age: 25, city: "New York"});

console.group("User Details");
console.log("Name: Shashi");
console.log("Age: 25");
console.log("City: New York");
console.groupEnd();

console.time("Loop Time");
for (let i = 0; i < 1000000; i++) {
    // Some time-consuming operation
}
console.timeEnd("Loop Time");

//apply css to console

const styles = "color: green; font-size: 20px; font-weight: bold;";
console.log("%cThis is a styled message.", styles);
