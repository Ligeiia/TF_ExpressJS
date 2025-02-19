const router = require('express').Router();

const products = [
    {
        id: 1,
        nom: "Anneau Unique",
        description: "Déscription : Un anneau pour les gouverner tous.",
        image: "Anneau.jpg",
        prix: "Prix : Inestimable.",
        disponibilite: {
            status: false,
            message: "Disponibilité : Dernière localisation connue : fondu dans la lave de la Montagne du Destin."
        }
    },{
        id: 2,
        nom: "Tournevis sonique",
        description: "Déscription : Technologie alien hyper avancée. Ouvre ou ferme les portes pour fuir (sauf celles en bois).",
        image: "Tournevis sonic.jpg",
        prix: "Prix : Inestimable, sauf si vous êtes un Seigneur du Temps ou si vous avez un pote chez UNIT.",
        disponibilite: {
            status: false,
            message: "Disponibilité : Actuellement perdue avec Gallifrey."
        }
    },{
        id: 3,
        nom: "Baguette d'Hermione Granger",
        description: "Déscription : LeviOsa pas leviosaaaaaa !",
        image: "Wand.webp",
        prix: "Prix : 7 Gallions.",
        disponibilite: {
            status: true,
            message: "Disponibilité : Disponible uniquement chez Ollivander si vous recevez votre lettre pour Poudlard."
        }
    },{
        id: 4,
        nom: "Broche de la main du roi",
        description: "Déscription : En or finement sculpté, elle s'accorde parfaitement avec une cape badass et un destin tragique.",
        image: "Kings hand.jpg",
        prix: "Prix : Ta vie (ou ta tête sur une pique).",
        disponibilite: {
            status: false,
            message: "Disponibilité : Actuellement portée par un type qui devrait probablement surveiller ses arrières."
        }
    },{
        id: 5,
        nom: "La DeLorean – La Machine à Voyager dans le Temps",
        description: "Déscription : Fonctionne au plutonium… ou à la foudre si t’es pressé.",
        image: "delorean.jpg",
        prix: "Prix : Si tu veux une version terrestre, tu peux trouver des DeLoreans dans les 20 000-40 000€, necessite quelques modifications pour la rendre fonctionnelle en voyage temporel.",
        disponibilite: {
            status: true,
            message: "Disponibilité : Seulement chez Doc Brown."
        }
    }
];

router.get("/", (req, res) => {
    res.status(200).render('product/index', {
        title: "Liste de produits",
        products,
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ error: "Le produit n'existe pas" })
    }

    res.status(200).render("product/details", {
        title: "Page produit",
        product,
        disponibilite: product.disponibilite
    });
});

module.exports = router;