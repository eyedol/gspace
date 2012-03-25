# -*- coding: utf-8 -*-

# The imports in this file are order-sensitive

from flask import Flask
from flask.ext.assets import Environment, Bundle
from flaskext.mail import Mail
from coaster import configureapp

# First, make an app and config it

app = Flask(__name__, instance_relative_config=True)
configureapp(app, 'ENVIRONMENT')
mail = Mail()
mail.init_app(app)
# Second, after config, import the models and views

import gspace.models
import gspace.views

# Third, setup baseframe and assets

assets = Environment(app)

css = Bundle('css/screen.css','css/print.css','css/ie.css')
#assets.register('js_all', js)
assets.register('css_all', css)

#js = Bundle('js/','js/',output='js/packed.js')
#assets.register('js_all', js) Enable this when there are js'


# Fourth, setup admin for the models

from flask.ext import admin
from flask.ext.admin.datastore.sqlalchemy import SQLAlchemyDatastore
#from gspace.views.login import lastuser

admin_datastore = SQLAlchemyDatastore(gspace.models, gspace.models.db.session)
#admin_blueprint = admin.create_admin_blueprint(admin_datastore,
 #   view_decorator=lastuser.requires_permission('siteadmin'))
admin_blueprint = admin.create_admin_blueprint(admin_datastore)
app.register_blueprint(admin_blueprint, url_prefix='/admin')
