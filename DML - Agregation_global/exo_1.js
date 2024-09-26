db.clients.aggregate([
    {
        // On décompose le tableau de commandes par commande histoire de travailler proprement
        $unwind: {
            path: '$COMMANDES',
        }
    },
    {
        // On décompose ensuite chaque détails individuellement pour pouvoir faire une jointure de chaque prod
        $unwind: {
            path: '$COMMANDES.DETAILS',
        }
    },
    {
        $lookup: {
            from: 'produits',
            localField: 'COMMANDES.DETAILS.PRODUCT_ID',
            foreignField: '_id',
            as: 'produit'
        }
    },
    // On décompose chaque jointure en un document contenant un seul produit
    {
        $unwind: {
            path: '$produit',
        }
    },
    {
        $project: {
            Details_Commandes: {
                ID_PROD: '$produit._id',
                PRIX_COMMANDE: '$produit.PRIX',
                NOM_ARTICLE: '$produit.LIBELLE',
                CLIENT: '$NOM',
                QT_COMMANDE: '$COMMANDES.DETAILS.QCOM',
                TOTAL_ARTICLES_DES_COMMANDES: '$COMMANDES.DETAILS.QCOM',
                TOTAL_DES_COMMANDES: {
                    $multiply: ['$produit.PRIX', '$COMMANDES.DETAILS.QCOM']
                }
            }
        }
    },
    {
        // Le groupe à la fin pour effectuer les sommes de tous les documents séparés crées précédement pour les jointures
        $group: {
            _id: null,
            DETAILS: { $push: '$Details_Commandes' },
            TOTAL_ARTICLES: { $sum: '$Details_Commandes.TOTAL_ARTICLES_DES_COMMANDES' },
            TOTAL_COMMANDES: { $sum: '$Details_Commandes.TOTAL_DES_COMMANDES' }
        }
    }
])