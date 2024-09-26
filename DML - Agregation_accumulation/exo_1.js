// Afficher la moyenne des COMPTES des clients ayant 
// passé au moins une COMMANDES par LOCALITE

db.clients.aggregate([
    {
        $match: {
            $and: [
                // On check si le champ existe, sinon on reçoit une erreur type missing
                { COMMANDES: { $exists: true } },
                // On check ensuite que la taille soit bien égale ou sup à 1
                { $expr: { $gte: [{ $size: "$COMMANDES" }, 1] } }
            ]
        }
    },
    {
        $group: {
            _id: "$LOCALITE",
            Moy_comptes: {
                $avg: '$COMPTE'
            }
        }
    }
])