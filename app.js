const express = require ('express')


const app = express()

const PORT= 4001

const userRouter = require ('./routes/routers')
app.use('/users',userRouter)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})