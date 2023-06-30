from flask import Flask, request, url_for, redirect, render_template
import pandas as pd
import pickle
import saspy

app = Flask(__name__)

@app.route('/')

def index():
    # # Initialize SAS session
    sas = saspy.SASsession()

    # read in the SAS macro from .txt file
    with open('/Users/davydsadovskyy/react_udemy/portfolio2/flask_shit/macro.txt', 'r') as f:
        lines = f.readlines()
        macro = ''.join(lines)
    return macro

