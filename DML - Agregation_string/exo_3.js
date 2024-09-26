// $substr est déprécié. La bonne fonction à utiliser est maintenant $substrBytes mais $toString est plus adapté a cette utilisation
// DOCUMENTATINO $substrBytes : https://www.mongodb.com/docs/manual/reference/operator/aggregation/substrBytes/#mongodb-expression-exp.-substrBytes
// DOCUMENTATION $toString : https://www.mongodb.com/docs/manual/reference/operator/aggregation/toString/
db.produits.aggregate([
    {
        $project: {
            NOM_STOCK_PRIX: {
                $concat: [
                    '$LIBELLE', ' ', { $toString: '$QSTOCK' }, ' ', { $toString: '$PRIX' }, '€'
                ]
            }
        }
    }
])