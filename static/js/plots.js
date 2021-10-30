function plot1() {

    // Histogram by type of crimes 
    d3.json("dump_summary_dict.json").then((importData) => {
        var data = importData;
        // console.log(data);
    
        //var properties = data.features.map(m => m.properties);
        // console.log(properties);
    
        var primaryType = data.map(m => m.primary_type);
        console.log(primaryType);
    
        var trace1 = {
            x: primaryType,
            type: "histogram",
            text: primaryType
        };
    
        var layout1 = {
            title: "Chicago Crimes by Primary Type 2020",
            yaxis: { title: "Frequency"}
        }
    
        var data1 = [trace1];
    
        Plotly.newPlot("plot1", data1, layout1);
    });
}
plot1();

function plot2() {
    // Crime by month
    d3.json("data.json").then((importData) => {
        var data = importData;
        console.log(data);

        var properties = data.features.map(m => m.properties);
        console.log(properties);
    })

}
    
plot2();
//    var type = [];
//    function testfunction() {
//        var test = primaryType.includes(types);
//        if (test === false) {
//            type.push(test);
//        }
//    }
//    console.log(type)
//    console.log(primaryType.forEach(testfunction));
