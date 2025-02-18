# Initialisation d'un projet NodeJs

### Commande 

- Création de dossier 
    - mkdir NOM_DU_DOSSIER

(mkdir NOM_DU DOSSIER > cd NOM_DU DOSSIER > npm init > > version > description NOM > >git repository LIEN DU REPOSITORY GIT > author NOM > license > ok? > )

- npm init 
    - npm init va initialiser un projet nodejs, plus précisément le fichier de configuration du projet
    - npm init va vous poser des questions pour créer une identification et une configuration basique de votre projet
    Ce fichier est le package.json qui comprend plusieurs éléments de configuraton de base [Lien vers configuration package.json](https://github.com/npm/cli/blob/latest/docs/lib/content/configuring-npm/package-json.md#files)
- npm init -y
    - npm init -y va créer une configuration de base en bypassant les questions de création

- Accéder a un dossier 
    - cd NOM_DU_DOSSIER

### Package.json

- Scripts:
```javascript
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "node --watch index.js"
  },
```

- node -- watch index.js permet de remplacer la dépendance nodemon en ajoutant nativement un hot-reload à notre application

### Insatallation des dépendances

- Dépendance de développement
    - Pour enregistre une dépendance uniquement nécéssaire en développement on va utiliser la commande : npm install --save-dev "nom de la dépendance ( par exemple : npm i --save-dev nodemon)

- Dépendance de production 
    - Pour enregistrer une dépendance nécéssaire pour toute la durée de vie du projet, on va utiliser la commande npm install "nom de la dépendance" (par exemple npm i express)
