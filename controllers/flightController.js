exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

const Flight =  require('../models/Flight');

exports.getFlight = async (req, res) => {
    try {
        const flights = Flight;
        res.status(200).json({
            message: "all flights",
            flight: flight,
          });
    } catch (error) {
        res.status(500).json({ message: error})
    }
}
