const jwt=require('jsonwebtoken')
const sessionIdToUserMap=new Map()
const secret="MY_SECRET_KEY"
function setUser(user){
    
    return jwt.sign({_id:user._id,
        email:user.email
    },secret)
}

function getUser(token){
    if(!token) return null
    return jwt.verify(token)
}

module.exports={
    setUser,getUser,
}