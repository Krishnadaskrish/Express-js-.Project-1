const userData = require("../Model/userinfo")
module.exports = {
    get: (req,res) => {
        res.send(userData)
    },
    getByid: (req,res) => {
        const id = parseInt(req.params.id)
        const userByid = userData.find((user) => user.id === id)
        if(userByid){
            res.json(userByid)
        }else{
            res.status(404).json({Error:"user not found"})
        }
    },
    post: (req,res) => {
        const {userName, name, email} = req.body
        const newUser = {
            id:userData.length +1,
            name: name,
            userName: userName,
            email: email
        }
        userData.push(newUser)
        res.json("new User added")
    },
    put: (req,res) => {
        const id = parseInt(req.params.id)
        const {userName, name, email} = req.body
        const userIndex = userData.findIndex((user) => user.id === id)
        if (userIndex === -1) {
            res.status(404).json({Error:"user not found"})

        }else{
            userData[userIndex] = {...userData[userIndex], name, userName, email}
            res.json(userData[userIndex])
        }
    },
    delete: (req,res) => {
        const id = parseInt(req.params.id)
        const userIndex = userData.findIndex((user) => user.id === id)
        if (userIndex === -1) {
            res.status(404).json({Error:"User Not Found"})

        }else{
            userData.splice(userIndex, 1)
            res.json(userData)
        }
    }
}