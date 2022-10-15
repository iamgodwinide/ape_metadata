const { connect } = require("mongoose");



connect("mongodb://127.0.0.1:27017/hekokokkklljuo12")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));