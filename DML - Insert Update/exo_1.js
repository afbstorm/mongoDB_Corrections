// Ajouter � tous les produits une date(LastStockMod) 
// permettant de savoir la derni�re modification du stock.

db.products.update({},{$currentDate: {LastStockMod: true}},{multi: true})
