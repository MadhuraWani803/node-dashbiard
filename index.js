const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('public')); // represents application is serving static webpage in public directory
app.get('/', (req, res) => {
res.sendFile('C:/Users/Shubhi/OneDrive/Desktop/TE/SEM 6/WAD/ASSIGNMENT 3A/assig3a/public/index.html');
});
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

