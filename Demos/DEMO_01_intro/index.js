/* 
En module :
import express from 'express;
*/

// ? Commonjs
// Importation du moteur d'express
const express = require('express');

// Création du server web d'express
const app = express();

// Déclaration du port d'écoute du server
const PORT = 3000;

// ? Configuration du moteur de vue (ejs)
app.set('view engine', 'ejs')

// ? Configuration du chemin d'accès des vues
app.set('views', './views') // ! './views' est optionnel car c'est l'option par défaut

// Création d'une route 
app.get('/', (req, res) => {
    const today = new Date().toLocaleDateString('fr-be', {
        dateStyle: 'full'
    });

    // Render prend 2 paramètres, le fichier à render et un objet de valeur à envoyer au template
    res.status(200).render('index', {
        today
    })

})

// Démarrage du server
app.listen(PORT, () => {
    console.log(`server is running on port : http://localhost:${PORT}`)
});
