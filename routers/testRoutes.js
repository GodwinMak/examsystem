const {create, updateTest, deleteTest} = require("../controllers/testController");

const router = require("express").Router()

router.post("/create", create);
router.put("/:id", updateTest);
router.delete("/:id", deleteTest);

module.exports = router
