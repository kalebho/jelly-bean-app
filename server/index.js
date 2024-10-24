
//index.js
const express = require('express');
const cors = require('cors');
const JellyBeanRoutes = require('./routes/JellyBeanRoute');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/jellyBeans', JellyBeanRoutes);


// Start the server
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
