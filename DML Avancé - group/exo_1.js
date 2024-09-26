db.clients.group({
	keyf: function(doc){return {LOCALITE: doc.LOCALITE}},
	cond: {COMMANDES: {$exists: true}},
	reduce: function(thisDoc, result){
		result.total += 1;
		result.tabMois = [];
		for(var i in thisDoc.COMMANDES){
			result.tabMois.push(thisDoc.COMMANDES[i].DATECOM.getDay());
		}
	},
	initial: {total: 0},
	finalize: function(result){
		var mois_annee = ["JAN", "FEV", "MAR", "AVR", "MAI", "JUI", "JUIL", "AOUT", "SEPT", "OCT", "NOV", "DEC"];
		result.mois = [];
		for(var i in result.tabMois)
		{
			result.mois.push(mois_annee[result.tabMois[i]])
		}
                return result.LOCALITE+ ": Nb de client: "+ result.total+ ". Mois d'achat: "+ result.mois;
	}
	
});