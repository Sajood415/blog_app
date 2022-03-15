const mongoose = require('mongoose')

const Connection = async () => {
    try{
   const db = 'mongodb+srv://sajood123:123@cluster0.bzewe.mongodb.net/BLOGS?retryWrites=true&w=majority'
   await mongoose.connect(db, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   });
   console.log("Database Connected")
} catch (e) {
    console.log("Error while connecting", e)
}
}

module.exports = Connection

