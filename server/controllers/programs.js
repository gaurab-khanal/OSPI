const Programs = require('../models/programs')

exports.add = (req,res)=>{
    const program = new Programs(req.body);
    program.save((err, program)=>{
        if(err){
            return res.status(400).json({
                err: "Cannot Save into DB"
            })
        }
        res.json({
            name: program.name,
            id: program._id,
            link: program.link
        })

    })
}

exports.list = (req,res)=>{
    Programs.find((err,programs)=>{
        if(err){
            return res.status(400).json({
                err: "Cannot retrieve DB"
            })
        }
        res.json(programs)
    })
}