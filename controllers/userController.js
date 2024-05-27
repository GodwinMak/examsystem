const db = require("../models");
const bcrypt = require("bcrypt");


const User = db.users


exports.create = async (req, res) => {
    try {
        const {first_name, last_name, email, password, role} = req.body;

        const check = await User.findOne({where: {email: email}});

        if(check) return res.status(400).json({message: "User already exists"});

        const salt = await bcrypt.genSalt(10);
        const hashedPasssword = await bcrypt.hash(password, salt);

        const user = await User.create({
            first_name,
            last_name,
            email,
            password: hashedPasssword,
            role
        });
        res.status(200).json({message: "user created Succesfully", user})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.login = async (req, res) =>{
    try {
       const {email, password}  = req.body;

       const user = await User.findOne({
        where: {email: email}
       })

       if(!user){
        return res.status(404).json({message: "Invalid email or passsword"})
       }

       const isPasswordValid = await bcrypt.compare(password, user.password);

       if(!isPasswordValid){
        return res.status(401).json({message: "Invalid email or password"})
       }

       res.status(200).json({message: "Login successfully", user})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}