const userDetails = require('../Model/userinfo')

module.exports = {
    get: (req,res)=>{
        res.send(userDetails)
    },
    getByid: (req,res) => {
        const id = parseInt(req.params.id)
        const userByid = userDetails.find((user) => user.id === id)
        if(userByid){
            res.json(userByid)
        }else{
            res.status(404).json({Error:"user not found"})
        }
    },
    post: (req,res) => {
        const {userName, name, email} = req.body
        const newUser = {
            id:userDetails.length +1,
            name: name,
            userName: userName,
            email: email
        }
        userDetails.push(newUser)
        res.json("new User added")
    },

    put:(res,req)=>{
       const id  = parseInt(req.params.id);
       const{username,name,email} = req.body
       const userIndex = userDetails.findIndex((user)=> user.id===id)
       if(userIndex === -1){
        res.status(404).json({Error:'user not found'})
       }else{userDetails[userIndex]= {...userDetails[userIndex],name,username,email}}
       res.json(userDetails[userIndex])
    
    },
    delete: (req, res)=>{
        const id = parseInt (req.params.id)
        const userIndex = userDetails.findIndex((user)=> user.id === id)
        if (userIndex === -1 ){
            res.status (404).json({Error:'user not found'})
        }else{
            userDetails.splice(userIndex,1)
            res.json(userDetails)
        }
    }
}