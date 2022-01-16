const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Cities",{}).then(()=>{
    console.log("Database Connected")
}).catch(err=>{
    console.log(err)
})


const citiesSchema =new mongoose.Schema({
    id:{ 
        type:Number,
        required: true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        validate(value){
            if(value.length <3){
                throw new Error("not valid value")
            }
        }
    },
    state:{ 
        type:String,
        required:true
    }});

const cityCollection= new mongoose.model("City",citiesSchema)

module.exports=cityCollection;

