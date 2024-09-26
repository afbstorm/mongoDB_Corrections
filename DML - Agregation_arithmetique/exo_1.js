db.clients.aggregate([
    {
        $match: {
            COMMANDES: { $exists: true }
        }
    },
    {
        $project: {
            Résultats: {
                $cmp: [
                    { $mod: ['$COMPTE', 2] }, 0
                ]
            }
        }
    }
])

// Utilisation de la clause $cmp qui retourne 0 si la valeur de COMPTE % 2 = 0 (pair) et 1 si impair