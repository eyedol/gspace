# -*- coding: utf-8 -*-

import os
from flask import (render_template, redirect, url_for, request, session, abort,
    flash, g, Response, Markup, escape, jsonify)
from flaskext.mail import Mail, Message
from markdown import markdown

from gspace import app
from gspace.forms import MembershipForm


@app.route('/membership', methods=('GET', 'POST'))
def membership():
    form = MembershipForm()
    if form.validate_on_submit():
        ## Save this to google spreadsheet
        flash("Thanks :-)",category='message')
    else: 
        flash("Please correct the indicated errors", category='interactive')
    
    return render_template('membership.html',form=form)
