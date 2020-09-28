const cloudinary = require('cloudinary').v2;
const http = require('http');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const fetchAudioTrack = async filename => {
    const url = await cloudinary.url(`${process.env.AUDIO_PATH}/${filename}`, { resource_type: "video", sign_url: true })
    return new Promise((res, rej) => {
        http.get(url, response => {
            const status = response.statusCode;
            const message = response.statusMessage;
            const buffer = [];
            response.on('data', data => buffer.push(data));
            response.on('end', () => res(Buffer.concat(buffer)));
            response.on('error', err => rej(err))
            if (![200].includes(response.statusCode)) rej({ status, message })
        })
    })
}

module.exports = { fetchAudioTrack };