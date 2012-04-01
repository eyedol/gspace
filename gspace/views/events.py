# -*- coding: utf-8 -*-

import os
from flask import render_template
from flask.ext.markdown import Markdown
from gspace import app

Markdown(app)

@app.route('/events')
def events():
    return render_template('events.html')
