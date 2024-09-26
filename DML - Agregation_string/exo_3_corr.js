//Afficher le PRODUIT , son QSTOCK, son PRIX et sa valeur 
// en stock dans un seul champ.

db.products.aggregate([
    {$project: {
        _id: false,
        PRODUCT: {$concat: [
            "NPROD: ", "$LIBELLE",
            ", QSTOCK: ", {$substr: ["$QSTOCK", 0, -1]},
            ", PRIX: ", {$substr: ["$PRIX", 0, -1]}
        ]}
    }}
])