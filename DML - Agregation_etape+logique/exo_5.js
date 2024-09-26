db.clients.aggregate([
        {$match: {NOM: {$regex: ".*n.*", $options: "i"}, COMPTE: {$gt: 0}}},
	{$sample: {size: 1}},
	{$project: {
		_id: false,
		NOM: true
	}}
])