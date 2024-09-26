// Ajouter à tous les produits une date(LastStockMod) 
// permettant de savoir la dernière modification du stock.

db.products.update({},{$currentDate: {LastStockMod: true}},{multi: true})
