# -*- coding: utf-8 -*-

# The imports in this file are order-sensitive

from flask import Flask
from flask.ext.assets import Environment, Bundle
from flaskext.mail import Mail
from coaster import configureapp

# 1, make an app and config it

app = Flask(__name__, instance_relative_config=True)
configureapp(app, 'ENVIRONMENT')
mail = Mail()
mail.init_app(app)

# 2, after config, import the models and views

import gspace.models
import gspace.views

# 3, setup assets

assets = Environment(app)

css = Bundle(
    'css/screen.css',
    'css/print.css',
    'css/ie.css',
    'css/slider.min.css',
    filters='cssmin',output='css/gspace-css-min.css')
assets.register('css_all', css)

floatbox_css = Bundle('js/libs/floatbox/floatbox.css',
        filters='cssmin',output='js/libs/floatbox/floatbox-min.css')
assets.register('floatbox_css',floatbox_css)

js = Bundle('js/libs/jquery-1.7.1.js',
    'js/libs/jquery.tweet.js',
    filters='jsmin',
    output='js/gspace-js-min.js')
assets.register('js_all', js)

floatbox_js = Bundle('js/libs/floatbox/floatbox.js'
        )
assets.register('floatbox_js',floatbox_js)

# 4, setup admin for the models

from flask.ext import admin
from flask.ext.admin.datastore.sqlalchemy import SQLAlchemyDatastore

admin_datastore = SQLAlchemyDatastore(gspace.models, gspace.models.db.session)

admin_blueprint = admin.create_admin_blueprint(admin_datastore)
app.register_blueprint(admin_blueprint, url_prefix='/admin')
