# -*- coding: utf-8 -*-

import os
from flask import render_template
from gspace import app

@app.route('/')
def index():
    home = {'welcome': render_template('content/home/welcome.md')}
    return render_template('index.html',home=home)
