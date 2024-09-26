// Utilisation du if pour simplifier la logique demandée et améliorer la clarté comparé à une solution par ternaire
// DOCUMENTATION : https://www.mongodb.com/docs/manual/reference/operator/aggregation/cond/
db.clients.aggregate([
    {
        $match: {
            CAT: { $exists: false }
        }
    },
    {
        $project: {
            Compte: {
                $cond: {
                    if: {
                        $gt: ['$COMPTE', 0]
                    },
                    then: 'Positif',
                    else: 'Negatif'
                }
            }
        }
    }
])