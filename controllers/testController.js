const db = require("../models")

const Test = db.tests;

exports.create = async (req, res) =>{
    try {
        const {test_name, test_date, test_duration, passGrade, test_total_marks} = req.body;

        const test = await Test.create({
            test_name,
            test_date,
            test_duration,
            passGrade,
            test_total_marks
        });
        res.status(200).json({message: "Test created successfully", test})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.updateTest = async (req, res) => {
  try {
    const id = req.params.id;
    const test = await Test.update(req.body, { where: { test_id: id } });
    res.status(200).json({ message: "User updated successfully", test });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.deleteTest = async (req,res) =>{
    try {
        const id = req.params.id;
        await Test.destroy({where: {test_id: id}})
        res.status(200).json({message: "Test deleted successfully"});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}