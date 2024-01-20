const express = require("express");
const { TimeZoneController } = require("../controllers/timeZone.controller");
const router = express.Router();

router.get("/", TimeZoneController.getAll);
router.post("/", TimeZoneController.add);
router.get("/:id", TimeZoneController.getById);
router.delete("/:id", TimeZoneController.deleteById);

module.exports = router