const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const cors = require("cors");
const { getProducts } = require("../Controller/products");
const {
    getTopBrands,
    getOnlyAtNykaa,
    getfeaturedBrands,
    gettrendingStores,
} = require("../Controller/home");
const { createUser } = require("../Controller/users");
const { getFooters } = require("../Controller/footers");
const { view } = require("../Controller/view");
const { signIn, checkdata } = require("../Controller/signIn");
const { isValidToken } = require("../Middleware/isValidToken");
const passport = require("../OAuth/googleLogin");
app.use(express.json());

app.use(passport.initialize());

app.get("/failed", (req, res) => {
    res.send("Some Error Occured In Google LOgin");
});

app.get("/success", (req, res) => {
    res.send(`Welcome to Nykaa`);
});

app.get(
    "/google",
    passport.authenticate("google", {
        scope: ["email", "profile"],
    })
);

app.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/failed",
    }),
    function (req, res) {
        console.log(req.user);
        res.redirect("/success");
    }
);

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", view);

app.get("/products", getProducts);
app.get("/topBrands", getTopBrands);
app.get("/OnlyAtNykaa", getOnlyAtNykaa);
app.get("/featuredBrands", getfeaturedBrands);
app.get("/trendingStores", gettrendingStores);
app.get("/footers", getFooters);
app.post("/checkdata", checkdata);

app.post("/signUp", createUser);
app.post("/signIn", signIn);

module.exports = app;
