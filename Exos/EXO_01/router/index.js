const router = require("express").Router();
const { v4: uuidv4 } = require('uuid'); // Sert à créer un id

let users = [];

/*
    "/users" -> http://localhost:3000/users
    "/users/42" -> http://localhost:3000/users/42
    "/users/42/details" -> http://localhost:3000/users/42/details
    "/products" -> http://localhost:3000/products
    "/" -> http://localhost:3000
*/

router.get("/users", (req, res) => {
    res.status(200).json(users); // 200 ok
});

router.get("/users/:id", (req, res) => {
    const userId = (req.params.id);
    const user = users.find((user) => user.id === userId);
//OU const user = users.find((user) => user.id === Number(req.params.id)) <- Number fonctionne si l'id est un nombre

    if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.status(200).json(user);
});

router.post("/users", (req, res) => {
    const { username, email } = req.body;

    if (!username || !email){
        res.status(403).json({error: "Username or email is required"}); // Unauthorized va permettre de spécifier une erreur côté client
    }
    const user = {
        id: uuidv4(),
        username,
        email,
    };
    users.push(user);

    res.status(201).json(users);
});  

router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    
    users = users.filter(user => user.id !== id)   
    // users.splice(user, 1); 

    res.status(204).send(); // 204 OK

});

router.patch("/users/:id", (req, res) => {
    const { username, email } = req.body;
    const { id } = req.params;
    const user = users.find((user) => user.id === id )

    if (!user) {
        res.status(404).json({ error: "Utilisateur non trouvé" });
        };
        

        user.username = username;
        user.email = email;
        res.status(200).json(users);
            

});  

module.exports = router;
