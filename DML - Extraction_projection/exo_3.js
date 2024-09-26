db.clients.find({
    COMMANDES: { $exists: true }, $where: 'this.COMMANDES.length > 1'
},
    {
        "COMMANDES.DETAILS": { $slice: [1, 1] },
        // Ceci permet d'afficher uniquement les détails de la commande
        // ⚠️ Attention : il n'est pas possible d'afficher "COMMANDES.DETAILS.QCOM"
        // en même temps que "COMMANDES.DETAILS" avec $slice car cela provoque un conflit.
        QCOM: true,
        _id: false
    }
)

// ⚠️ Attention, il n'est pas permis d'accèder à un élément enfant d'un parent sur lequel un slice est effectué ⚠️
// DOCUMENTATION : https://www.mongodb.com/docs/manual/reference/operator/projection/slice/#:~:text=Path%20Collision%3A%20%24slice%20of%20an%20Array%20and%20Embedded%20Fields&text=In%20previous%20versions%2C%20the%20projection,collection.
// Voir chapitre Behavior : Path Collision