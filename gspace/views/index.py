# -*- coding: utf-8 -*-

import os
from flask import render_template
from flipy.flipy import Flipy
from gspace import app

@app.route('/')
def index():
    home = {'welcome': render_template('content/home/welcome.md')}
    photos = get_flickr_photos()
    return render_template('index.html',home=home,photos=photos)

def get_flickr_photos():
    flickr = Flipy(app.config['FLICKR_API_KEY'])
    return flickr.people.getPublicPhotos(user_id=app.config['FLICKR_USER_NSID'],
            per_page=app.config['FLICKR_PHOTOS_PER_PAGE'])

