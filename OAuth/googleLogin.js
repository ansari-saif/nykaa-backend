const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID:
                "323093858656-5hogei86qaptjgggq7k3dnlj2m8b55am.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3006/google/callback",
            passReqToCallback: true,
        },
        function (request, accessToken, refreshToken, profile, done) {
            // console.log("accessToken", accessToken);
            // console.log("refreshToken", refreshToken);
            // console.log("profile", profile);
            return done(null, profile);
        }
    )
);

module.exports = passport;
