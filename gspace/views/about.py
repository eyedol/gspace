# -*- coding: utf-8 -*-

import os
from flask import render_template
from flask.ext.markdown import Markdown
from gspace import app

Markdown(app)

@app.route('/about')
def about():
    about = {'body':render_template('content/about/body.md'),'location':render_template('content/about/location.md')}
    return render_template('about.html', about=about)
