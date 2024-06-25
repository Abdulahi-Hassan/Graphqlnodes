const { default: mongoose } = require("mongoose");
exports.DB = mongoose.connect(process.env.mongodb);
console.log("Sucessfully Mongoose Connected");
