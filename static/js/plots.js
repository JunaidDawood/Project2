function init() {
    var dropdownMenu1 = d3.select("#selDataset1");
    var dropdownMenu2 = d3.select("#selDataset2");

    // Grab data
    d3.json("http://127.0.0.1:5000/summary").then((importData) => {
        var data = importData;

        // Extract primary type from the data
        var crimeNames = [];

        for (var i = 0; i < data.length; i++) {
            var name = data[i]["primary_type"];
            if (crimeNames.includes(name)) {
                crimeNames
            }
            else {
                crimeNames.push(name);
            }
        }

        // Get 10 crime types that we want: theft, battery, criminal damage, assault, deceptive practice, other offense, motor vehicle theft, burglary, robbery, weapons violation
        var crimeName = [];
        crimeName.push("TOTAL CRIMES")
        crimeName.push(crimeNames[24]);
        crimeName.push(crimeNames[2]);
        crimeName.push(crimeNames[5]);
        crimeName.push(crimeNames[1]);
        crimeName.push(crimeNames[8]);
        crimeName.push(crimeNames[18]);
        crimeName.push(crimeNames[14]);
        crimeName.push(crimeNames[3]);
        crimeName.push(crimeNames[25]);
        crimeName.push(crimeNames[21]);

        // Add these as a dropdown menu
        crimeName.forEach((name) => {
            dropdownMenu1.append("option").text(name).property("value");
        });

        // Extract Months from the Menu
        var monthNames = [];

        for (var i = 0; i < data.length; i++) {
            var name2 = data[i]["crime_month_name"];
            if (monthNames.includes(name2)) {
                monthNames
            }
            else {
                monthNames.push(name2);
            }
        }

        // Get month name in chronological order
        var monthName = [];
        monthName.push("ALL YEAR");
        monthName.push(monthNames[4]);
        monthName.push(monthNames[3]);
        monthName.push(monthNames[7]);
        monthName.push(monthNames[0]);
        monthName.push(monthNames[8]);
        monthName.push(monthNames[6]);
        monthName.push(monthNames[5]);
        monthName.push(monthNames[1]);
        monthName.push(monthNames[11]);
        monthName.push(monthNames[10]);
        monthName.push(monthNames[9]);
        monthName.push(monthNames[2]);

        // Add these as a dropdown menu
        monthName.forEach((name) => {
            dropdownMenu2.append("option").text(name).property("value");
        });


        // Initial Line plot:
        var dict1 = {};
        for (var i = 0; i < data.length; i++) {
            var month = data[i]["crime_month_name"];
            if (!dict1[month]) {
                dict1[month] = 0;
            }

            dict1[month] += data[i]["reported_crime"];
        }

        // dict1 is a dictionary; convert into an array
        var array1 = [];
        for (var key in dict1) {
            if (dict1.hasOwnProperty(key)) {
                array1.push(
                    {"month":key, "incidence":dict1[key]});
            }
        }

        // Sort the array1
        var monthArray = [];
        monthArray.push(array1[4]);
        monthArray.push(array1[3]);
        monthArray.push(array1[7]);
        monthArray.push(array1[0]);
        monthArray.push(array1[8]);
        monthArray.push(array1[6]);
        monthArray.push(array1[5]);
        monthArray.push(array1[1]);
        monthArray.push(array1[11]);
        monthArray.push(array1[10]);
        monthArray.push(array1[9]);
        monthArray.push(array1[2]);

        var trace1 = {
            x: monthArray.map(m => m.month),
            y: monthArray.map(m => m.incidence),
            type: "line",
        }
        
        var data1 = [trace1];

        var layout1 = {
            title: "Total Reported Crimes throughout the Year",
            xaxis: {title: "month"},
            yaxis: {title: "Total Number of Reported Crimes"}
        }

        Plotly.newPlot("plot1", data1, layout1);



        // Initial Bar Chart
        var dict2 = {} 

        for(var i = 0; i < data.length; i++) {

            var primary = data[i]["primary_type"]
            if (!dict2[primary]) {
                dict2[primary] = 0
            }

            dict2[primary] += data[i]["reported_crime"]
        }

        // dict2 is a dictionary; convert it to an array
        var array2 = [];
        for (var key in dict2) {
            if (dict2.hasOwnProperty(key)) {
                array2.push(
                    {"primary_type":key, "incidence": dict2[key]}
                );
            }
        }

        // Filter in ascending order of frequency
        var sortedArray2 = array2.sort(function(a, b) {
            return b.incidence - a.incidence;
        });

        // Extract primary types and incidences into x and y variables
        var xVariable = sortedArray2.map(m => m.primary_type);
        var yVariable = sortedArray2.map(m => m.incidence);
        
        // Graph 
        var trace2 = {
            x: xVariable,
            y: yVariable,
            type: "bar",
            text: xVariable
        };
        
        var data2 = [trace2];

        var layout2 = {
            title: "Chicago Crimes by Primary Type 2020",
            yaxis: { title: "Frequency"}
        }

        Plotly.newPlot("plot2", data2, layout2);

        






    });
}

init();

function optionChanged1(crimetype) {
    plot1(crimetype);
}

function plot1(crimetype) {
    // Crime by month
    d3.json("http://127.0.0.1:5000/summary").then((importData) => {
        var data = importData;

        var subData = data.filter(type => 
            type.primary_type == crimetype);

        // Extract data
        var dict1 = {};
        for (var i = 0; i < subData.length; i++) {
            var month = subData[i]["crime_month_name"];
            if (!dict1[month]) {
                dict1[month] = 0;
            }

            dict1[month] += subData[i]["reported_crime"];
        }
        console.log(data);

        // dict1 is a dictionary; convert into an array
        var array1 = [];
        for (var key in dict1) {
            if (dict1.hasOwnProperty(key)) {
                array1.push(
                    {"month":key, "incidence":dict1[key]});
            }
        }

        // Sort the array1
        var monthArray = [];
        monthArray.push(array1[4]);
        monthArray.push(array1[3]);
        monthArray.push(array1[7]);
        monthArray.push(array1[0]);
        monthArray.push(array1[8]);
        monthArray.push(array1[6]);
        monthArray.push(array1[5]);
        monthArray.push(array1[1]);
        monthArray.push(array1[11]);
        monthArray.push(array1[10]);
        monthArray.push(array1[9]);
        monthArray.push(array1[2]);
        console.log(monthArray);

        var trace1 = {
            x: monthArray.map(m => m.month),
            y: monthArray.map(m => m.incidence),
            type: "line",
        }
        
        var data1 = [trace1];

        var layout1 = {
            title: "Total Reported Crimes throughout the Year",
            xaxis: {title: "Month"},
            yaxis: {title: "Total Number of Reported Crimes"}
        }

        Plotly.newPlot("plot1", data1, layout1);
    })
}


function plot2 (month) {

    // Grab data: switch to "http://127.0.0.1:5000/summary" before submission
    d3.json("http://127.0.0.1:5000/summary").then((importData) => {
        var data = importData;

        var subData = data.filter(type => 
            type.crime_month_name == month);

        // Extract crime types and then sum up the number of reports per category
        var dict2 = {} 

        for(var i = 0; i < subData.length; i++) {

            var primary = subData[i]["primary_type"]
            if (!dict2[primary]) {
                dict2[primary] = 0
            }

            dict2[primary] += subData[i]["reported_crime"]
        }

        // dict2 is a dictionary; convert it to an array
        var array2 = [];
        for (var key in dict2) {
            if (dict2.hasOwnProperty(key)) {
                array2.push(
                    {"primary_type":key, "incidence": dict2[key]}
                );
            }
        }

        // Filter in ascending order of frequency
        var sortedArray2 = array2.sort(function(a, b) {
            return b.incidence - a.incidence;
        });

        // Extract primary types and incidences into x and y variables
        var xVariable = sortedArray2.map(m => m.primary_type);
        var yVariable = sortedArray2.map(m => m.incidence);
        
        // Graph 
        var trace2 = {
            x: xVariable,
            y: yVariable,
            type: "bar",
            text: xVariable
        };
        
        var data2 = [trace2];

        var layout2 = {
            title: "Chicago Crimes by Primary Type 2020",
            yaxis: { title: "Frequency"}
        }

        Plotly.newPlot("plot2", data2, layout2);
    })
}

function optionChanged2(month) {
    plot2(month);
}

