db.clients.aggregate([
    { $unwind: '$COMMANDES' },
    {
        $project: {
            "COMMANDES.DETAILS": true,
            NOM: true,
            _id: false
        }
    }
])

