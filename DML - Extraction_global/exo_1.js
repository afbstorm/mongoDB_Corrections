db.clients.find({
    $and: [
        { NOM: { $regex: 'n', $options: 'i' } },
        { COMPTE: { $ne: 0 } }
    ]
},
    {
        NOM: true,
        COMPTE: true,
        ADRESSE: true,
        _id: false
    })


// L'utilisation de '.*' est optionnelle et ne fait qu'agrandir la query regex, pour au final, le même résultat.
// Ajout du $and pour plus de lisibilité du code. Même si mongodb le fait implicitement quand deux éléments dans les critères