const view = async (req, res, next) => {
    try {
        res.render("home", { name: "Nykaa" });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    view,
};
