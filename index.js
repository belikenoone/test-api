import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({message:"Hello"})
})
app.listen(8080,()=>{
    console.log("App is running on port 8080")
})
