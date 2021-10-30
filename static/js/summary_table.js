// from flask application
d3.json("http://127.0.0.1:5000/summary").then((importedData)=>{
    var summary = importedData;
    d3.select("tbody")
    . selectAll("tr")
    .data(summary)
    .enter()
    .append("tr")
    .html(function(d) {
        return `<td>${d.year}</td>
                <td>${d.crime_month_name}</td>
                <td>${d.primary_type}</td>
                <td>${d.description}</td>
                <td>${d.reported_crime}</td>`;
    })
});