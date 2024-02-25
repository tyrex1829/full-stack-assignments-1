// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("./easy/text.txt", "UTF-8", (err, data) => {
    if(err) throw err;
    let newData = data.replace(/\s+/g, " ");

    fs.writeFile("./easy/text.txt", newData, "UTF-8", (err) => {
        if(err) throw err;
        console.log("Successfully written again");
    })
})
