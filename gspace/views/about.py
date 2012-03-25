# -*- coding: utf-8 -*-

import os
from flask import render_template
from gspace import app

@app.route('/about')
def about():
    return render_template('about.html')
