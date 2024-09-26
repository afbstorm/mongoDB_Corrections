//Afficher le montant total de la valeur des produits en stock.

// Selon la compréhension de l'énoncé on pourrait penser à faire le total de chaque article selon son stock
// Comme la somme du total de chaque article

db.produits.aggregate([
      {
            $match: { QSTOCK: { $exists: true } }
      },
      {
            $project: {
                  ValeurStock: { $multiply: ['$QSTOCK', '$PRIX'] }
            }
      }
])

// OU

db.produits.aggregate([
      {
            $group: {
                  _id: null,
                  ValeurTotale: {
                        $sum:
                              { $multiply: ['$QSTOCK', '$PRIX'] }
                  }
            }
      },
      {
            $project: {
                  _id: false,
                  ValeurTotale: true
            }
      }
])