"""
Dreamhost. Reminds me of my roommate, David :-)
"""
import sys, os
INTERP = os.path.expanduser("~/python/env/bin/python")
if sys.executable != INTERP: os.execl(INTERP, INTERP, *sys.argv)

sys.path.append(os.getcwd())

from website import app as application
