# MultimediaUploader

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Requirements

* Nodejs - https://nodejs.org/en/
* Git - https://git-scm.com/downloads


## Steps for setting up environment
1. Open terminal type w/o quote "git clone https://github.com/bryanjarito/angular7-imgurcloudservice-viewupload-imagevideo.git"
2. "cd angular7-imgurcloudservice-viewupload-imagevideo"
3. "npm install"
4. "ng serve"

## Features

* Allow uploading and persisting .jpg, .jpeg and .mp4 files
    - imgur cloud service only allow videos less than 1 minute and file size 200MB
    - sample files stored at \src\assets\uploads 
* Show a UI where users can upload new files, and show the list of files uploaded so far
* Provide a way to "preview" the uploaded files.  For images, we want to see the image, and for mp4's, play the video
* Write basic tests for your code, and document a way to run them - "ng test"
* Use a responsive layout that works and looks great on desktops and mobile devices
* Add player controls when previewing mp4 files.  Include controls that allow for:
    - Skipping forward and back 10 seconds
    - Pause/Play
    - Speed up/slow down playback


## Bug

Uploading video does not auto refresh table list - need manual refresh