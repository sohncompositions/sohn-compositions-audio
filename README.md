# Sohn Compositions Audio Server

### Table of Contents
- [Overview](#overview)
- [Configuring Server](#configuring-server)
- [Uploading Audio Tracks](#uploading-audio-tracks)
- [Deployment](#deployment)

### Overview
- This server acts as a middleman to a Cloudinary account, which will securely fetch audio files and serve them to [sohncompositions.com](https://sohncompositions.com).
- All audio files should be uploaded using [Cloudinary](https://cloudinary.com/) GUI.

### Configuring Server 
- Make sure your [Heroku](https://dashboard.heroku.com) app is connected to this github repository. From the Deploy tab, choose Connect To Github and select this repository.
-  You will also need to make sure the following environment/config variables exist under the Settings tab:
    - `API_KEY`, `API_SECRET`, and `CLOUD_NAME`
        - Provided by Cloudinary
    - `AUDIO_FOLDER_PATH`
        - Name of the Cloudinary folder containing your audio tracks.
    - `ORIGIN_WHITELIST`
        - Space-separated list of domains which are allowed access to audio server (`https://sohncompositions.com` is probably sufficient for now).
    - `REFERER_WHITELIST`
        - Spaced-separated list of referers which are allowed to make requests to audio server (`https://sohncompositions.com/` is sufficient to prevent direct requests to mp3 files such as `https://sohn-compositions-audio/audio/<name-of-file>.mp3` ).

### Uploading Audio Tracks
- Using the Cloudinary GUI simply upload audio tracks to the folder named in your config variable `AUDIO_FOLDER_PATH`. 
- These will automatically be available by making reference to the audio track `filename` in your [Portfolio Configuration File](https://github.com/sohncompositions/sohn-compositions-portfolio#configuration-file).

### Deployment
- Any time you make a change to one of the above config variables you will need to re-deploy server.
- To deploy, from the Deploy tab in the Heroku dashboard, verify that you are connected to the correct repository and that `master` branch is selected under Manual Deploy. Simply click `Deploy Branch`. 