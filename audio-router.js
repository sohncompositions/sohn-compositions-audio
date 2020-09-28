const express = require('express');
const { fetchAudioTrack } = require('./cloudinary');

const audioRouter = express.Router();

audioRouter.route('/:filename')
    .get(async (req, res, next) => {
        try {
            const buffer = await fetchAudioTrack(req.params.filename);
            res.setHeader('Content-Type', 'arraybuffer')
            res.status(200).end(buffer)
        } catch (err) {
            next({ status: 500, message: 'There was a problem retrieving audio file from Cloudinary: ' + err.message })
        }
    });

module.exports = { audioRouter };