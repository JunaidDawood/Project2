from flask import Flask, jsonify, render_template, redirect
from flask_pymongo import PyMongo
from flask import request
from flask import Response
import pandas as pd
import json
import numpy as np
import dateutil

app = Flask(__name__)

# setup mongo connection
mongo_db = "chicago_crime"
mongo = PyMongo(app, uri=f'mongodb://localhost:27017/{mongo_db}')
collection = mongo.db.crime_type_summary

@app.route("/")
@app.route('/index')
def index():
    return render_template('index.html')


    
@app.route("/summary")
def jsondata():
    summary = [i for i in collection.find()]
    for data in summary: data.pop("_id")
    summary = jsonify(summary)
    summary.headers.add('Access-Control-Allow-Origin', '*')
    print(summary)
    return summary


# Filter Data on the map by selecting the Primary Type
@app.route('/selectorpage', methods=['GET','POST'])
def selector():
    selector = 'HOMICIDE'
    #selector = "BATTERY"
    if request.method == 'POST':
        selector = request.form.get("selector_listener", None)

    #cursor= mongo.db.events.find({ '$and': [{'properties.year': '2020'}, {'properties.primary_type': selector}] }) 
    cursor= mongo.db.events.find({ '$and': [{'properties.year': '2020'}, {'properties.primary_type': selector}] }) 
    features=[]
    for geojson_feature  in cursor:
       features.append({
        "type": geojson_feature['type'],
        "geometry":  geojson_feature['geometry'],
        "properties" :  geojson_feature['properties']
           
           }
        )
    #print(features)
    
    data = { 'features' : features}
    #print(data)
    data = json.dumps(data)
    #data = 'Hello'
    return render_template('index.html', geojson=data)



#render to index html
@app.route("/getGeojasonData")
def readGeoJson():
    #cursor= mongo.db.events.find()
    #cursor=mongo.db.events.find({'properties': {"primary_type":"HOMICIDE"}})
    #cursor= mongo.db.events.find({'properties.primary_type':"HOMICIDE"})
    selector = "HOMICIDE"
    #selector = "BATTERY"
    #cursor= mongo.db.events.find({ '$and': [{'properties.id': '23757'}, {'properties.primary_type': selector}] }) 
    cursor= mongo.db.events.find({ '$and': [{'properties.year': '2020'}, {'properties.primary_type': selector}] }) 
    features=[]
    for geojson_feature  in cursor:
       features.append({
        "type": geojson_feature['type'],
        "geometry":  geojson_feature['geometry'],
        "properties" :  geojson_feature['properties']
           
           }
        )
    #print(features)
    
    data = { 'features' : features}
    #print(data)
    data = json.dumps(data)
    #data = 'Hello'
    return render_template('index.html', geojson=data)
     #return render_template('index.html', geojson=data)

    # This line works
    #return jsonify(data)



##crime = collection.find()
if __name__ == "__main__":
   # app.run(host="localhost" , debug=True)
    app.run(debug=True)
