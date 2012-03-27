# -*- coding: utf-8 -*-

import re
from flask import g, request
from flask.ext.wtf import Form, TextField, Required, Email, Length, ValidationError
from flask.ext.wtf.html5 import  EmailField

class MembershipForm(Form):
    """Form for applying for a new membership"""
    full_name = TextField("Your Full Name", 
            description="We need this to make our records look good.",
            validators=[Required("Your full name is required."),
                Length(min=2, max=100, 
                    message="%(max)d characters maximum")])

    email_address = EmailField("Your Email Address",
            description = u"We will use your email address "\
                          u"to contact you when we open up for "\
                          u"applications",
            validators=[Required("Your email address is required."),
                Email("Okay! That does not appear to be a valid email address")])

