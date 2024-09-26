db.clients.aggregate([
    {
        // On recherche d'abord la condition
        $match: {
            LOCALITE: 'Namur'
        }
    },
    {
        // Ensuite on utilise la fonction $group pour faire la $sum des occurences
        // par rapport à la condition ci-dessus
        $group: {
            _id: '$LOCALITE',
            nbClients: { $sum: 1 }
        }
    }
])