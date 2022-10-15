const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/:name", (req, res) => {
    const { name } = req.params;
    const imgPath = path.join(__dirname, `../public/image/${name}.png`);
    const fileExists = fs.existsSync(imgPath);
    if (fileExists) {
        return res.sendFile(imgPath);
    } else {
        return res.sendFile(path.join(__dirname, `6993.png`));
    }
})

module.exports = router;