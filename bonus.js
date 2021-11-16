caches.keys().then((keyList) => Promise.all(keyList.map((key) => caches.delete(key))))

// Create the buildChart function.
function buildCharts(sample) {
  // @TODO: Use `d3.json` to fetch the sample data for the plots
  d3.json("samples.json").then((data) => {
  var plotData = `/samples/${sample}`;
  // @TODO: Build a Bubble Chart using the sample data
  d3.json(plotData).then(function(data){
    var x_axis = data.otu_ids;
    var y_axis = data.sample_values;
    var size = data.sample_values;
    var color = data.otu_ids;
    var texts = data.otu_labels;
  
    var bubble = {
      x: x_axis,
      y: y_axis,
      text: texts,
      mode: `markers`,
      marker: {
        size: size,
        color: color
      }
    };

    var data = [bubble];
    var layout = {
      title: "Belly Button Bacteria",
      xaxis: {title: "OTU ID"}
    };
    Plotly.newPlot("bubble", data, layout);

    d3.json(plotData).then(function(data){
      var values = data.sample_values.slice(0,10);
      var labels = data.otu_ids.slice(0,10);
      var display = data.otu_labels.slice(0,10);

      var pie_chart = [{
        values: values,
        lables: labels,
        hovertext: display,
        type: "pie"
      }];
      Plotly.newPlot('pie',pie_chart);
    });
  });
};
    // Create a variable that filters the samples for the object with the desired sample number.

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    // Create a variable that holds the first sample in the array.
	 var firstSample = data.names[0];
         buildCharts(firstSample);
         buildMetadata(firstSample);    

    // 2. Create a variable that holds the first sample in the metadata array.
	var obs = data.metadata;
  	var filterArray = obs.filter(sampleObject => sampleObject.id == sample);
        

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
        var otu_ids = data.otu_ids.slice(0,10);
        var otu_labels = data.otu_labels.slice(0,10);
        var otu_values = data.sample_values.slice(0,8);
  

    // 3. Create a variable that holds the washing frequency.
        var wfreq = data.metadata.map(d => d.wfreq)
            //console.log(`Washing Freq: ${wfreq}`) 
   // Create the yticks for the bar chart.
   	var bar_data =[
   	 {
     	 y:otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
     	 x:otu_values.slice(0,10).reverse(),
     	 text:otu_labels.slice(0,10).reverse(),
     	 type:"bar",
     	 orientation:"h"
   	 }
 	 ];

 	 var barLayout = {
  	  title: "Top 10 Bacteria Cultures Found",
  	  margin: { t: 30, l: 150 }
 	 };

    var barData = [bar_data];
    var barLayout = {
        title: "Top Ten OTUs for Individual " +sample,
     	margin: {l: 100, r: 100, t: 100, b: 100}
    };
   //bubble chart
 	var LayoutBubble = {
   		margin: { t: 0 },
  		xaxis: { title: "OTU ID" },
   		hovermode: "closest",
   		};

   	var DataBubble = [ 
   	{
     		x: otu_ids,
     		y: otu_values,
     		text: otu_labels,
     		mode: "markers",
     		marker: {
       		color: otu_ids,
       		size: values,
      		 }
  	 }
 	];
    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("bar", barData, barlayout); 

    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot("bubble", DataBubble, LayoutBubble);
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
	  domain: { x: [0, 1], y: [0, 1] },
 	  value: result.wfreq
          mode: "gauge+number",
          gauge: { axis: { range: [null, 10] },
                   steps: [
                    { range: [0, 2], color: "red" },
                    { range: [2, 4], color: "orange" },
                    { range: [4, 6], color: "yellow" },
                    { range: [6, 8], color: "lime" },
                    { range: [8, 10], color: "green" },
                  ]}
 	  title: 'Belly Button Washing Frequency<br> Scrubs per Week',
          titlefont: {family: '"Palatino Linotype", "Book Antiqua", Palatino, serif'},
          type: "indicator",
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
         width: 450,
         height: 400,
         margin: { t: 25, r: 25, l: 25, b: 25 },
         line: {
         color: '600000'
         },
         //paper_bgcolor: "#a5bdc6",
         //font: { color: "#85541d", family: "Serif" }
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", guageData,gaugeLayout);
  });
}

}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    const metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    const resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    const result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    const PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
      //PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// create the function for the change event
function optionChanged(id) {
    buildCharts((id);
    buildMetadata(id);


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    const sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    // extra comment: changed from var to const sample.json start with "names".
    //  
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();
