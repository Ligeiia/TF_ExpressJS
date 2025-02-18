const router = require("express").Router();

let users = [];

router.post("/users", (req, res) => {
    const { username, email } = req.body;

    const user = {
        id: users.length + 1,
        username,
        email,
    };
    users.push(user);

    res.status(201).json(users);
});  

router.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.status(200).json(user);
});  


router.get("/users", (req, res) => {
    res.status(200).json(users);
});


router.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex((u) => u.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    users.splice(index, 1);
    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
});

router.patch("/users/:id", (req, res) => {
    const { username, email } = req.body;
    const idUser = parseInt(req.params.id);
    const i = users.findIndex(user => user.id === idUser )

    if (i !== -1) {
        users[i] = {
            id: idUser,
            username,
            email,
        };
        res.status(200).json(users);
} else {
    res.status(404).json({ message: "Utilisateur non trouvé" });
}    
});  


module.exports = router;
