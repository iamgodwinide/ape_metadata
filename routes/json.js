const router = require("express").Router();
const JsonFile = require("../model/JsonFile");
const printOnText = require("../processImg");


router.get("/:name", async (req, res) => {
    try {
        const { name } = req.params;
        if (name === "favicon.ico") return res.json({ msg: "taken" })
        const index = await JsonFile.find({});
        if (index.length > 9) {
            console.log("here")
            await JsonFile.deleteMany({});
            printOnText(name, 0);
        } else {
            printOnText(name, index.length);
        }
        const newJSon = new JsonFile({ name })
        await newJSon.save();

        return res.json({
            "name": `${name}.wtf`,
            "image": `https://ape.wtfdomains.wtf/image/${name}`,
            "description": `${name}.wtf, an ether name.`,
            "attributes": [
                {
                    "trait_type": "Character Set",
                    "display_type": "string",
                    "value": "Mixed"
                }
            ],
            "name_length": 0,
            "segment_length": 0,
            "url": `https://ape.wtfdomains.wtf/metadata/${name}.wtf`,
            "version": 0,
            "background_image": `https://ape.wtfdomains.wtf/image/${name}`,
            "image_url": `https://ape.wtfdomains.wtf/image/${name}`
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "internal server error"
        })
    }
})



module.exports = router;