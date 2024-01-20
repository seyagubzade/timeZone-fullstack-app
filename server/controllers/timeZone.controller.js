const { TimeZone } = require("../models/timeZone.model");

const TimeZoneController = {
  getAll: async (req, res) => {
    try {
      const data = await TimeZone.find({});
      res.send(data).status(200);
    } catch (error) {
      res.send(error).status(404);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const target = await TimeZone.findById(id);
      res.send(target).status(200);
    } catch (error) {
      res.send(error).status(404);
    }
  },
  deleteById: async (req, res) => {
    try {
      const { id } = req.params;
      await TimeZone.findByIdAndDelete(id);
      const data = await TimeZone.find({});
      res.send(data).status(200);
    } catch (error) {
      res.send(error).status(404);
    }
  },
  add: async (req, res) => {
    try {
      const { name, desc, price, model, image } = req.body;
      const data = new TimeZone({ name, desc, price, model, image });
      await data.save();
      res.send(data).status(200);
    } catch (error) {
      res.send(error).status(404);
    }
  },
};

module.exports = { TimeZoneController };
