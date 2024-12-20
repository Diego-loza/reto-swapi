const PadawanController = require("../application/controllers/PadawanController")

module.exports.handler = async (event) => {
    const padawanController = new PadawanController();
    return padawanController.getPadawan(event);
}