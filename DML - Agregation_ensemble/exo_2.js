db.experience.aggregate([
    {$project: {		COMMUN: {$setIntersection: ["$A", "$B"]}, 		DIFFERENT: {$setDifference: ["$A", "$B"]}, 		UNION: {$setUnion: ["$A", "$B"]}}	}
])