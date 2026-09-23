const express = require("express");
const mongoose = require("mongoose");

const app = express();


// Middleware
app.use(express.json());


// Serve frontend
app.use(express.static("public"));


// MongoDB connection
mongoose
    .connect("mongodb://127.0.0.1:27017/Breez_db")
    .then(() => {

        console.log("MongoDB connected successfully");
        const db = mongoose.connection.db;
        const users = db.collection("users");
       app.post("/login", async (req, res) => {

    const user = await users.findOne({
        name: req.body.name
    });

    if (!user) {

        console.log("User not found");

        return res.json({
            success: false,
            message: "Username not found"
        });

    }


    console.log("User found");


    if (user.password === req.body.password) {

        console.log("Password correct");
        await users.updateOne(
        {
            name: req.body.name
        },
        {
            $set: {
                last_login_date: new Date()
            }
        }
    );

        return res.json({
            success: true,
            message: "Login successful"
        });

    } else {

        console.log("Password incorrect");

        return res.json({
            success: false,
            message: "Incorrect password"
        });

    }

});

        app.listen(3000, () => {
            console.log("Server running at http://localhost:3000");
        });

    })
    .catch((error) => {

        console.log("MongoDB connection failed:", error);

    });