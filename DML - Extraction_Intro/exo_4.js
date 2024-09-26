// En spécifiant l'object COMMANDES on peut aller rechercher l'object DETAILS ce qui permet, si besoin, d'également spécifier d'autres enfants de COMMANDES
db.clients.find({
    COMMANDES: {
        $exists: true
    }
},
    {
        // Ici on décompose le document
        _id: false,
        COMMANDES: {
            DETAILS: true
        }
    }
)

// Ou on utilise directement le principe de relations de chaînage de clés ce qui permet de ne récupérer qu'une seule potentielle valeur sur l'ensemble des enfants de COMMANDES
db.clients.find({
    COMMANDES: {
        $exists: true
    }
},
    {
        // Ici on chaine les clés du documents
        'COMMANDES.DETAILS': true,
        _id: false
    }
)