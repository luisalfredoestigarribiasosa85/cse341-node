const kariRoute = (req, res) => {
    res.send("Hello, Kari");
};

const luisRoute = (req, res) => {
    res.send("Hello, Luis");
};

module.exports = {
    kariRoute,
    luisRoute
};