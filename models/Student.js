import mongoose from "mongoose";

// Defining Schema
const studentSchema = new mongoose.Schema({
    name: {type:String, required:true, trim:true},
                                        // trim - if someone put space then it will get trimmed. 
    age: {type:Number, required:true, min:18, max:60},
    fees: {type:mongoose.Decimal128, required:true, validate:(value)=> value >= 4000.50 }
                                                    // Custom Validation
})

// Model                          // Model Name(it will become collection 'students') , Schema Name      
const StudentModel = mongoose.model("student", studentSchema)

export default StudentModel