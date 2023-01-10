const express = require("express");
const app = express();

const Utilisateur = require('../Utilisateur');


const utilisateurRoute = express.Router();


// Ajouter Utilisateur
utilisateurRoute.route("/ajout_user").post((req, res, next) => {

  Utilisateur.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// recuperer tous les Utilisateur
utilisateurRoute.route("/").get((req, res) => {
  Utilisateur.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// recupere un Utilisateur
utilisateurRoute.route("/lire_unUser/:id").get((req, res) => {

  Utilisateur.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// add Utilisateur
utilisateurRoute.route("/modifier/:id").put((req, res, next) => {
  Utilisateur.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Utilisateur updated successfully!");
      }
    }
  );
});



module.exports = utilisateurRoute;
