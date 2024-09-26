db.clients.aggregate([
	{
		$match: {
			COMMANDES: { $exists: true, $size: 1 }
		}
	},
	{
		$group: {
			_id: "$LOCALITE",
			NbCLient: { $sum: 1 }
		}
	}])

// $match ne permet pas de ' matché ' deux fois sur un même champ - Je n'ai pas trouvé de lien assez explicite dans la doc mais par exemple : 
/* $match: {
		COMMANDES: {$exists: true},
		COMMANDES: {$size: 1}
}
	N'est absolument pas correct car le deuxième appel de COMMANDES va écraser le premier résultat 
	
	Par contre : 
	$and: [
		{$match: {
			COMMANDES: {$exists: true}
			}
		},
		{$match: {
			COMMANDES: {size: 1}
			}
		}
	]

	Va fonctionner mais est nettement moins rapide et donc moins efficace.
	*/