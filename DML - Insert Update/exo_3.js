// Effectuer une modification de l’_id, du LIBELLE (NotFound404), 
// du PRIX (100) et du QSTOCK (404) du produit ‘NF404’.


db.products.update({_id: "NF404"},
	{$setOnInsert: {_id:"NF404", LIBELLE: "Not Found 404", PRIX: 100, QSTOCK: 404}},{upsert: true})