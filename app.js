
function dropdownBuilder(selDataset, names) {
    // With names data, display all names
    names.map(uto_name => {
        // In the dropdown menu, append <option> tags with subject ID 
        selDataset.append("option")
            .attr("value", uto_name)
            .text(uto_name)
    })
} 
// 1. Create the buildCharts function.
function buildCharts(samples, metadata, subjectID) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    samples.map(sample => {
        // Find the sample object in the samples array by its ID
        switch(subjectID) {
            case sample.id :
                // 7. Create the yticks for the bar chart.
    		// Hint: Get the the top 10 otu_ids and map them in descending order  
   		 //  so the otu_ids with the most bacteria are last. 
            var slicedSampleValues = sample.sample_values.slice(0, 10).reverse();
            var slicedOtuID = sample.otu_ids.slice(0, 10).reverse();
            var slicedLabels = sample.otu_labels.slice(0, 10).reverse();
            
            // Display bar chart
            var trace1 = {
                x: slicedSampleValues,
                y: slicedOtuID.map(otuID => `OTU ${otuID}`),
                type: "bar",
                orientation: "h",
                text: slicedLabels,
                name: subjectID
            };

            var barData = [trace1];

            var barLayout = {
                title: `Top 10 OTUs found in individual ID ${subjectID}`,
                margin: {t: 50, l: 100, b: 20}
            };

            Plotly.newPlot("bar", barData, barLayout);

            // Display bubble chart
            var trace2 = {
                x: sample.otu_ids,
                y: sample.sample_values,
                mode: 'markers',
                marker: {
                    color: sample.otu_ids,
                    size: sample.sample_values,
                    colorscale: "Earth"
                },
                text: sample.otu_labels
            };
              
            var bubbleData = [trace2];
              
            var bubbleLayout = {
                title: `Bubble Chart of OTUs in individual ID ${subjectID}`,
                hovermode: "closest",
                xaxis: {title: "OTU ID"}
            };
              
            Plotly.newPlot("bubble", bubbleData, bubbleLayout);
            break
        };

    });

    // Display Demographic Info for this subject
    var sampleDemographic = metadata.filter(demoInfo => demoInfo.id == subjectID)[0]
    var demoDiv = d3.select("#sample-metadata");
    demoDiv.html("")
    // Display all keys and values in this subject
    Object.entries(sampleDemographic).map(([key, value]) => {
        demoDiv.append("h6").text(`${key}: ${value}`)
    });
    // Adding a gauge with the use of Washing Frequency value
    renderGauge(sampleDemographic.wfreq);

};

// Main function
function init() {
    d3.json("data/samples.json").then(data => {
        // Import data
        var metadata = data.metadata;
        var names = data.names;
        var samples = data.samples;
    
        // Select the dataset div in html
        var selDataset = d3.select("#selDataset");
    
        // Display Dropdown Menu options
        dropdownBuilder(selDataset, names);
    
        // Initialize with the first sample "940" as the default result
        buildCharts(samples, metadata, names[0]);
    
        // Set a listener for the dropdown menu
        selDataset.on("change", optionChanged);
    
        function optionChanged() {
            // Return the selected value from dropdown menu
            var subjectID = selDataset.node().value;
    
            // Build all graphics
            buildCharts(samples, metadata, subjectID);
            
        };
    });
};

// Run Main function
init();

