const express = require("express");
const userRoutes = require("./routes/userRouter.js");
const db = require("./config/knexfile.js"); 

const app = express();
app.use(express.json());

// Mount user routes
app.use("/users", userRoutes);

// Start server
const PORT = 5000 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});