const mongoose = require('mongoose');

const ConnectionDB=async(options={})=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/doc')
        console.log("Connection is done");
        mongoose.connection.on('error',(error:any)=>{
            console.error("Db connection is error",error)
        })
    } catch (error) {
        console.log("Coundn't connect database ",error.toString());
    }
}
export default ConnectionDB;