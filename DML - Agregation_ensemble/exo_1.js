db.experience.aggregate([
    {$project: {COMMUN: {$setIntersection: ["$A", "$B"]}}}
])