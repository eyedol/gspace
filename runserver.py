#!/usr/bin/env python
import os
os.environ['ENVIRONMENT'] = "development"
from gspace import app
from gspace.models import db
db.create_all()
app.run('0.0.0.0', debug=True, port=8000)
