const mongoose = require('mongoose')

const Connection = async () => {
    try{
   const db = 'ADD MONGO URL'
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

