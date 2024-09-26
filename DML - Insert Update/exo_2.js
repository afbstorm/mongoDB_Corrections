// Effectuer une modification du stock du produit dont l’_id est ‘CS262’. 
// (ajout de 23 produits dans le stock)

db.products.update({_id: "CS262"},{$inc: {QSTOCK: 23}})
