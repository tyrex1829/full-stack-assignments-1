// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("./easy/text.txt", "Hello this is for testing", "UTF-8", (err) => {
    if(err) throw err;
    console.log("Successfully written");
})