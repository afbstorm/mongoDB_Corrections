db.clients.aggregate([
    {
        $match: {
            COMMANDES: { $exists: true }
        }
    },
    {
        $lookup: {
            from: 'produits',
            localField: 'COMMANDES.DETAILS.PRODUCT_ID',
            foreignField: '_id',
            as: 'Résultats'
        },
    },
    {
        $project: {
            'Résultats._id': true,
            'Résultats.LIBELLE': true,
            NOM: true,
            _id: false
        }
    }
])