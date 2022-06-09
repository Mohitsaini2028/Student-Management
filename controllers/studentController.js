import StudentModel from "../models/Student.js"

class StudentController {
    //functions

    static createDoc = async (req, res) => {
        console.log(req.body)
        try{
            const {name, age, fees} = req.body;
            const doc = new StudentModel({
                name: name,
                age: age,
                fees: fees
            })

            // Saving Document
            const result = await doc.save();
            console.log(result)

            res.redirect("/student") //path
        }
        catch(error){
            console.log(error)
        }

    }

    static getAllDoc = async (req, res) =>{
        try{
            const result = await StudentModel.find()
            // console.log(result)
            res.render("index", {data: result}) //html file 
                                //transfering result into data
        }
        catch(error){
            console.log(error)
        }
    }

    static editDoc = async (req, res) =>{
        try{
            const result = await StudentModel.findById(req.params.id)
            console.log(result)
            res.render("edit", {data: result})
        }
        catch(error){
            console.log(error)
        }
        
    }

    static updateDocById = async (req, res) =>{
        try{
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            console.log(result)
            res.redirect("/student")
        }
        catch(error){
            console.log(error)
        }
    }

    static deleteDocById = async (req, res) =>{
        try{
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            console.log(result)
            res.redirect("/student")
        }
        catch(error){
            console.log(error)
        }
    }
}

export default StudentController