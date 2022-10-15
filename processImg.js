var Jimp = require('jimp');


const images = [
    "https://ipfs.io/ipfs/bafybeige7utaqw4rmdqiyhpyzfkvk63qn6unl3mpngagmiwpju3rrttc3y/6993.png",
    "https://ipfs.io/ipfs/bafybeige7utaqw4rmdqiyhpyzfkvk63qn6unl3mpngagmiwpju3rrttc3y/4252.png",
    "https://ipfs.io/ipfs/bafybeige7utaqw4rmdqiyhpyzfkvk63qn6unl3mpngagmiwpju3rrttc3y/5826.png",
    "https://ipfs.io/ipfs/bafybeige7utaqw4rmdqiyhpyzfkvk63qn6unl3mpngagmiwpju3rrttc3y/4718.png",
    "https://ipfs.io/ipfs/bafybeige7utaqw4rmdqiyhpyzfkvk63qn6unl3mpngagmiwpju3rrttc3y/3802.png",
    "https://ipfs.io/ipfs/bafybeige7utaqw4rmdqiyhpyzfkvk63qn6unl3mpngagmiwpju3rrttc3y/9002.png",
    "https://ipfs.io/ipfs/bafybeige7utaqw4rmdqiyhpyzfkvk63qn6unl3mpngagmiwpju3rrttc3y/1140.png",
    "https://ipfs.io/ipfs/bafybeige7utaqw4rmdqiyhpyzfkvk63qn6unl3mpngagmiwpju3rrttc3y/646.png",
    "https://ipfs.io/ipfs/bafybeige7utaqw4rmdqiyhpyzfkvk63qn6unl3mpngagmiwpju3rrttc3y/6336.png",
    "https://ipfs.io/ipfs/bafybeige7utaqw4rmdqiyhpyzfkvk63qn6unl3mpngagmiwpju3rrttc3y/2269.png",
];


const printOnText = async (text, index) => {
    try {
        console.log(index)
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