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
        form.save_to_google_doc()
        flash("Thanks :-) ",category='message')
        return redirect(url_for('membership'))
    return render_template('membership.html',form=form)
