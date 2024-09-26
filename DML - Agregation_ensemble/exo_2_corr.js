db.experiment.aggregate([
    {$project: {DIFF: {$setUnion:[{$setDifference: ["$A", "$B"]}, 
                                  {$setDifference: ["$B", "$A"]}]
                      }
               }
    }
                       ])
                