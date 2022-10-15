const router = require("express").Router();
const JsonFile = require("../model/JsonFile");
const printOnText = require("../processImg");
const images = require("../constants/images");
const axios = require("axios");

router.get("/:name", async (req, res) => {
    try {
        const { name } = req.params;
        let attrr = [];
        if (name === "favicon.ico") return res.json({ msg: "taken" })

        const index = await JsonFile.find({});
        // get attr from ipfs
        if (index.length > 9) {
            await JsonFile.deleteMany({});
            printOnText(name, 0);
            const num = images[0].split(/3y\//)[1].replace(".png", "");
            const data = await axios.get(`https://ipfs.io/ipfs/bafybeiemcledni75upcwnsl6akzu7xcdzy2wstyz6yotnproduoyrm27mi/${num}.json`);
            attrr = data.data.attributes;

        } else {
            printOnText(name, index.length);
            const num = images[index.length].split(/3y\//)[1].replace(".png", "");
            const data = await axios.get(`https://ipfs.io/ipfs/bafybeiemcledni75upcwnsl6akzu7xcdzy2wstyz6yotnproduoyrm27mi/${num}.json`);
            attrr = data.data.attributes;
        }
        const newJSon = new JsonFile({ name })
        await newJSon.save();

        res.end(JSON.stringify({
            "name": `${name}.wtf`,
            "image": `https://ape.wtfdomains.wtf/image/${name}`,
            "description": `${name}.wtf, an ether name.`,
            "attributes": attrr,
            "name_length": 0,
            "segment_length": 0,
            "url": `https://ape.wtfdomains.wtf/metadata/${name}.wtf`,
            "version": 0,
            "background_image": `https://ape.wtfdomains.wtf/image/${name}`,
            "image_url": `https://ape.wtfdomains.wtf/image/${name}`
        }, null, 3))
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "internal server error"
        })
    }
})



module.exports = router;