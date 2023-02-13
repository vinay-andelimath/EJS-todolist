const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
//const:we can push the new items but we cannot alter
const items = ["HTML", "JAVASCRIPT", "NODE JS"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
    //calling the function
    const day = date.getDate();


    /**Refactoring the code */
    // let today = new Date();

    // let options = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long"
    // };
    // let day = today.toLocaleDateString("en-GB", options);

    res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
    //  console.log(req.body);
    const item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }


});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});
//post work route
// app.post("/work", function (req, res) {
//     let item = req.body.newItem;
//     items.push(item);
//     res.redirect("/work");
// })


app.listen(3000, function () {
    console.log("Server is running on the port 3000")
})