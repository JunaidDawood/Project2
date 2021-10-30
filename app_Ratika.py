from flask import Flask, jsonify, render_template
from flask_pymongo import PyMongo
from flask import request
from flask import Response
import pandas as pd
import numpy as np
import dateutil

app = Flask(__name__)

# setup mongo connection

mongo_db = "chicago_crime"

mongo = PyMongo(app, uri=f'mongodb://localhost:27017/{mongo_db}')


collection = mongo.db.crime_type_summary
# conn = "mongodb://localhost:27017"
# client = pymongo.MongoClient(conn)

# # connect to mongo db and collection
# db = client.chicago_crime
# crime_type_summary = db.crime_type_summary
@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/summary")
def jsondata():
    # write a statement that finds all the items in the db and sets it to a variable
    summary = [i for i in collection.find()]
    for data in summary: data.pop("_id")
    summary = jsonify(summary)
    summary.headers.add('Access-Control-Allow-Origin', '*')
    print(summary)
    # new_data = []
    # for dictionary in crime_type_summary:
    #     new_d = {k:v for k,v in dictionary.items() if k != '_id'}
    #     new_data.append(new_d)

    # summary = {k:v for k,v in summary.items() if k not in ['_id']}
    return summary
    #render an index.html template and pass it the data you retrieved from the database
    #return render_template("index.html", summary=summary)


if __name__ == "__main__":
    app.run(debug=True)