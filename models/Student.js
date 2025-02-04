const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
   name: { type: String },
   gpa: { type: Number },
   tuitionPaid: { type: Boolean},
}, { timestamps: true });


module.exports = mongoose.model("Student", studentSchema);