# -*- coding: utf-8 -*-

import os
from flask import render_template
from gspace import app

@app.route('/')
def index():
    return render_template('index.html')
