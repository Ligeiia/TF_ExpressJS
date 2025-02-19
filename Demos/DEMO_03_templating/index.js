const express = require('express');
const path = require('path');
const router = require('./routers');

const app = express();
const PORT = 4000;

// ? Configuration de Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));

// ? Configuration de la lecture des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
app.use(router)
// -> < img src='/images/sarah.jpg' />

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT} 🟢`);    
});

