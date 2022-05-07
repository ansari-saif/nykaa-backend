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
const { createUser, updateUser } = require("../Controller/users");
const { getFooters } = require("../Controller/footers");
const { view } = require("../Controller/view");
const { signIn } = require("../Controller/signIn");
// const { isValidToken } = require("../Middleware/isValidToken");

const {
    addToCart,
    getFromCart,
    updateCart,
    deleteFromCart,
    emptyCart,
} = require("../Controller/cartproducts");
app.use(express.json());

const corsOptions = {
    origin: "*",
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
app.post("/products", getProducts);
app.get("/topBrands", getTopBrands);
app.get("/OnlyAtNykaa", getOnlyAtNykaa);
app.get("/featuredBrands", getfeaturedBrands);
app.get("/trendingStores", gettrendingStores);
app.get("/footers", getFooters);

// login or register API's

app.post("/signIn", signIn);
app.post("/signUp", createUser);

// update Profile

app.post("/updateProfile", updateUser);

module.exports = app;
