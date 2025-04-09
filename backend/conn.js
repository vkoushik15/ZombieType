import mongoose from "mongoose"

const db =async()=>{
try {
    await mongoose.connect('mongodb+srv://akoushik:akoushik@cluster0.hselv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('connected ot db')
} catch (error) {
    console.log('erro in connecting to db',error)
}


}
export default db