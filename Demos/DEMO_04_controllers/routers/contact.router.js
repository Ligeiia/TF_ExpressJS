const router = require('express').Router();
const ContactController = require("../controllers/contact.controller")

// ? Récupération et affichage de la vue PUG
router.get('/', ContactController.getContact);
// ? Envoi des données au serveur
router.post('/', ContactController.postForme);

module.exports = router