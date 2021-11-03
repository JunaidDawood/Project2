# Project-2-Crime-Incidents-in-Chicago

![image](https://user-images.githubusercontent.com/85905358/139990734-44eef98f-2058-4ee9-a87c-851efb2ab58c.png)

Meet the team: Ratna Jadhav, Arnaz Alavi, Ratika Chauhan, Seong-Min Kim, Junaid Dawood 

### Introduction
As residents of Chicago, we found it fitting to create an interactive dashboard to visualize Crime Data in our city. 
We wanted to provide a place for anybody to be able to click around and easily get information about crime rates in Chicago

### Coding Approach
   
As part of our coding approach, we started off by finding an open-source dataset that can be used to develop our full stack application

1. We extracted the dataset from Chicago Police Department CLEAR system using Web API Calls and processed the same through ETL Process
2. We then loaded the final datasets to MongoDB using Panda PyMongo
3. We used Flask Framework on local server to extract and filter data from MongoDB to create the charts.
4. HTML and Bootstrap CSS provides a Dashboard template and the visualization for the dashboards are constructed in JS using d3 and plotly leaflet
![image](https://user-images.githubusercontent.com/85905358/139994382-e60fbda4-f447-4a27-aadd-8d8c46caae5b.png)


### Data Wrangling
 
For the process of converting the raw data into more usable format we first went through the API documentation provided by the CLEAR  system (Citizen Law Enforcement Analysis and Reporting)
1. We thoroughly analyzed the data set and  selected the right parameters needed for the API call . We also had to set up paging to retrieve the results in batches  to make sure we extracted the complete data set for 2020.
2. We then used Pandas library to clean and transform our dataset. We also created addional summary dictionaries with pre calculations that were used to create  some of the charts in the dashboard directly for faster response .
3. We then loaded the final and cleaned datasets into a Mongodb with multiple collections 
4. Our Flask App was used to retrieves the data from MongoDB . We also set up queries in the Flask App to further filter the data based on user selection and to retrieve only the subset of data from Mongo DB for the charts.
5. We used Javascript to calls the flask endpoints to get the data for visualization 
![image](https://user-images.githubusercontent.com/85905358/139995013-3a62b687-7f84-492e-9e92-1e5f8dd3c649.png)


Timeline of Activities: 
October 19: Determined dataset and initial project management duties. 
October 21: Completed Project Proposal including the project timeline, separation of responsibility, creation of GitHub repo, and confirmation of technologies/programs we plan to use. 
October 23: Complete ETL section of the project. (Finishing full clean up, and load of data into the database so that it is ready for front-end development). Create initial visual (brainstorm) to work off of. 
Oct 24-Nov : Hold regular working sessions to complete visuals.

Link to data:
JSON link: https://data.cityofchicago.org/resource/ijzp-q8t2.json 
GeoJSON link: https://data.cityofchicago.org/resource/ijzp-q8t2.geojson 

### Responsibilities: 
- ETL: Ratika Chauhan
- Front-End HTML: Seong-Min Kim, Ratna Jadhav
- GoeMap: Arnaz Alavi
- Line Chart and Bar Chart: Seong-Min Kim
- Stacked Chart: Junaid Dawood

### Next Steps
- Use a cloud-shared database
- Deploy our code into Heroku Cloud
- Optimize our data retrieval process to include more records
- Provide prompts on dashboard to encourage user to utilize the visuals
  - Ex: Are you interested in moving to Lakeview East? Click on the map to view the crime rate in that neighborhood. 






