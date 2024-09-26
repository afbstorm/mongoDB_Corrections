db.clients.find({
    COMPTE: {
        $lt: 0
    }
}, {
    _id: false,
    NOM: true
})