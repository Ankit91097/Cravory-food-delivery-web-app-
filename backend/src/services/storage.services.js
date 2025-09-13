var ImageKit = require("imagekit");

var imagekit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT,
});

async function uploadFile(file, fileName) {
  const result = await imagekit.upload({
    file,
    fileName,
  });
  return result;
}

module.exports = uploadFile;
