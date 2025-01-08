const kariRoute = (req, res) => {
    res.send("Hello, Kari");
};

const luisRoute = (req, res) => {
    res.send("Hello, Luis");
};

const ashleyRoute = (req, res) => {
    res.send("Hello, Ashley");
};

module.exports = {
    kariRoute,
    luisRoute,
    ashleyRoute
};