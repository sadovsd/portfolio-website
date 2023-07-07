from flask import Flask, request, url_for, redirect, render_template
from flask_cors import CORS
import pandas as pd

CORS(app)

app = Flask(__name__)

@app.route('/')
def use_template():
    return render_template("index.html")


@app.route('/predict',methods=['POST','GET'])
# obtain user input with request.form
def predict():
    polynomial_degree = request.form['1']
    return render_template('result.html',pred=f'Your polynomial degree was {polynomial_degree}')


if __name__ == '__main__':
    app.run(debug=True)
