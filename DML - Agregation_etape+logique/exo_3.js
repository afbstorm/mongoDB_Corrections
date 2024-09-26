db.clients.aggregate([
    {
        $match: {
            $or: [
                { COMPTE: { $gt: 0 } },
                { COMMANDES: { $exists: true } }
            ]
        }
    },
    {
        $group: {
            _id: '$LOCALITE',
            nbClients: { $sum: 1 }
        }
    }
])