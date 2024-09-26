// $substr est déprécié. La bonne fonction à utiliser est maintenant $substrBytes mais $toString est plus adapté a cette utilisation
// DOCUMENTATINO $substrBytes : https://www.mongodb.com/docs/manual/reference/operator/aggregation/substrBytes/#mongodb-expression-exp.-substrBytes
// DOCUMENTATION $toString : https://www.mongodb.com/docs/manual/reference/operator/aggregation/toString/

db.clients.aggregate([
    {
        $project: {
            MONTANT_EN_EURO: {
                $concat: [
                    { $toString: '$COMPTE' }, ' ', '€']
            }
        }
    }
])