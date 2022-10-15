var Jimp = require('jimp');
const images = require("./constants/images");

const printOnText = async (text, index) => {
    try {
        const leftmargin = (460 - (text.length * 21.33)) / 2;
        // open a file called "lenna.png"
        Jimp.read(images[index], (err, lenna) => {
            if (err) throw err;
            Jimp.loadFont("IcHvG8_qgSMt5RstRutPkBnd.ttf.fnt")
                .then(font => {
                    lenna
                        .resize(512, 512) // resize
                        .print(font, leftmargin, 40, `${text}.wtf`)
                        .write(`public/image/${text}.png`); // save
                })
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = printOnText;