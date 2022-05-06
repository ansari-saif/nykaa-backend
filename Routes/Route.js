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
const { signIn } = require("../Controller/signIn");
// const { isValidToken } = require("../Middleware/isValidToken");
const passport = require("../OAuth/googleLogin");
const users = require("../Model/users");
const { genPassword } = require("../CommonLib/passwordGen");
const {
    addToCart,
    getFromCart,
    updateCart,
    deleteFromCart,
    emptyCart,
} = require("../Controller/cartproducts");
app.use(express.json());

app.use(passport.initialize());

app.get("/failed", (req, res) => {
    res.send("Some Error Occured In Google Login");
});

app.get("/success", (req, res) => {
    // console.log(req);
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
    async function (req, res) {
        // console.log(req.user.emails[0].value)

        let userDetail = await users.find({ email: req.user.emails[0].value });
        let data;
        if (userDetail.length != 0) {
            // res.status(200).json(userDetail[0]);
            data = userDetail[0];
        } else {
            let pass = genPassword();

            let userData = {
                name: req.user.displayName,
                email: req.user.emails[0].value,
                phoneNumber: "-1",
                password: pass,
            };

            let response = await users.insertMany([userData]);
            // res.status(201).json(response);
            data = response;
            console.log(userData);
        }
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
app.set("views", "./View");

app.get("/", view);

// cart API's
app.post("/addtocart", addToCart);
app.post("/cartproducts", getFromCart);
app.post("/updateCart", updateCart);
app.post("/deleteitem", deleteFromCart);
app.post("/emptycart", emptyCart);

// web data API's
app.get("/products", getProducts);
app.get("/topBrands", getTopBrands);
app.get("/OnlyAtNykaa", getOnlyAtNykaa);
app.get("/featuredBrands", getfeaturedBrands);
app.get("/trendingStores", gettrendingStores);
app.get("/footers", getFooters);

// login or register API's

app.post("/signIn", signIn);
app.post("/signUp", createUser);

module.exports = app;
