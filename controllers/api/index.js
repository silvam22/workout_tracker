const router = require('express').Router();
<<<<<<< HEAD
const userRoute = require("./user-routes.js");
=======
const userRoute = require("./user-routes");
const trainerRoute = require("./trainer-routes");
>>>>>>> f063a6a4d825204b096eee7eaac276d7374b8d33
const postRoute = require("./post-routes");
const commentRoute = require("./comments-routes");
const trainerRoute = require("./trainer-routes");


router.use("/users", userRoute);
router.use("/trainers", trainerRoute);
router.use("/posts", postRoute);
router.use("/comments", commentRoute);
router.use("/trainer", trainerRoute);


module.exports = router;