# Project-2-Crime-Incidents-in-Chicago

![image](https://user-images.githubusercontent.com/85905358/139990734-44eef98f-2058-4ee9-a87c-851efb2ab58c.png)

Meet the team: Ratna Jadhav, Arnaz Alavi, Ratika Chauhan, Seong-Min Kim, Junaid Dawood 

### Introduction
As residents of Chicago, we found it fitting to create an interactive dashboard to visualize Crime Data in our city. 
We wanted to provide a place for anybody to be able to click around and easily get information about crime rates in Chicago

### Coding Approch
   ![image](https://user-images.githubusercontent.com/85905358/139992248-68caf1f2-9c27-4263-a499-f6877987323c.png)
As part of our coding approach, we started off by finding an open-source dataset that can be used to develop our full stack application

1. We extracted the dataset from Chicago Police Department CLEAR system using Web API Calls and processed the same through ETL Process
2. We then loaded the final datasets to MongoDB using Panda PyMongo
3. We used Flask Framework on local server to extract and filter data from MongoDB to create the charts.
4. HTML and Bootstrap CSS provides a Dashboard template and the visualization for the dashboards are constructed in JS using d3 and plotly leaflet


### Data Wrangling
   ![image](https://user-images.githubusercontent.com/85905358/139992888-fbf0103c-cf55-403c-ade3-b557c200fbcc.png)
For the process of converting the raw data into more usable format we first went through the API documentation provided by the CLEAR  system (Citizen Law Enforcement Analysis and Reporting)
1. We thoroughly analyzed the data set and  selected the right parameters needed for the API call . We also had to set up paging to retrieve the results in batches  to make sure we extracted the complete data set for 2020.
2. We then used Pandas library to clean and transform our dataset. We also created addional summary dictionaries with pre calculations that were used to create  some of the charts in the dashboard directly for faster response .
3. We then loaded the final and cleaned datasets into a Mongodb with multiple collections 
4. Our Flask App was used to retrieves the data from MongoDB . We also set up queries in the Flask App to further filter the data based on user selection and to retrieve only the subset of data from Mongo DB for the charts.
5. We used Javascript to calls the flask endpoints to get the data for visualization 





Timeline of Activities: 
October 19: Determined dataset and initial project management duties. 
October 21: Completed Project Proposal including the project timeline, separation of responsibility, creation of GitHub repo, and confirmation of technologies/programs we plan to use. 
October 23: Complete ETL section of the project. (Finishing full clean up, and load of data into the database so that it is ready for front-end development). Create initial visual (brainstorm) to work off of. 
Oct 24-Nov : Hold regular working sessions to complete visuals.

Link to data:
CSV: https://www.kaggle.com/currie32/crimes-in-chicago?select=Chicago_Crimes_2012_to_2017.csv
JSON link: https://data.cityofchicago.org/resource/ijzp-q8t2.json 
GeoJSON link: https://data.cityofchicago.org/resource/ijzp-q8t2.geojson 

Responsibilities: 
ETL: Seong-Min
Front-End HTML: Ratika
Graph 1: Ratna
Graph 2: Arnaz
Graph 3: Junaid

In order to create an interactive visual to display the data we found, we will be completing the following processes:
1. To clean up data (ETL), we are using Pandas. 
2. We will be loading our data into the mongodb. The data will be loaded directly from Pandas. 
3. Build the front end schema of the visuals using HTML 
4. Plot a couple pie plots, bar graphs, bubble graphs, search of a districts/neighborhoods (by zip code), and a map of the data using D3 (mapping web). 
    * Create flask applications for each visual
    * Combine all flask applications to consolidate all visuals


