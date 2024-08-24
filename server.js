import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import indexRouter from "./src/Routes/index.js";
import peopleRoutes from "./src/Routes/PeopleRoute.js"
// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/people', peopleRoutes); 
console.log('Request received at /api/people');

// Routes
// app.use('/', indexRouter);


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/MVC_Pattern_Form', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
});

