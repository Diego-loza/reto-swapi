const SwapiController = require("../application/controllers/SwapiController")

module.exports.handler = async (event) => {
    const swapiController = new SwapiController();
    return swapiController.getSwapi(event);
}