db.clients.aggregate([
    {
        $project: {
            COMPTE: { $cond: [{ $eq: ['$COMPTE', 0] }, '$COMPTE', 'Compte pas égal à 0'] },
            _id: false
        }
    }
])