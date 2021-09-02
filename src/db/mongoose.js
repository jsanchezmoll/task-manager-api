const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
    useNewurlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

