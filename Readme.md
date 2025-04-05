## Overview of the analysis
JavaScript, Plotly, and D3.js are used to create a horizontal bar chart that displays human volunteers (OTUs) using Plotly and the D3 dropdown functions. 

## Resources
Programming language: Javascript, plotly, d3.js.

## Results
Here is a javascript app that counts the bacteria Operational Taxonomic Unit (OTU), which describes a genus similarity. For example, JSON and d3.js utilize the filter data of volunteers to display the ten bacteria colony species and their OTU, as they can be hoover over on the bar chart. 

![map][Figure 1](https://github.com/davidhyongae2/bacteria/blob/main/Figure1.png).

The bubble chart describes the bacteria species count as an OTU grouping. A single sample can then be tabled by ID, ethnicity, gender, location, age, and frequency. Most importantly, at the sample level, the bubble chart overlaps the OTUs. 

![map][Figure 2a](https://github.com/davidhyongae2/bacteria/blob/main/Figure2a.png)

A gauge chart is one of the more unique types, where a clear categorical depiction of volunteers' belly button washing is compared to a bar chart or bubble chart alongside the Gauge chart. The OTU relationship of the volunteers' samples and the bacteria genus forms the biodiversity for each sample. There is a greater degree of OTU for the initial sample, while the OTU variation is greater with more sampling. Further studies need to be done, which may lead to hospital care and proper clinical testing of the samples. 

![map][Figure 2b](https://github.com/davidhyongae2/bacteria/blob/main/Figure2b.png).

## Summary
1. Provide a high-level usage of d3.js and other plotly to translate sample.json to create a functional web app.

2. One of the drawbacks of this dataset does not have a clear phylogenetic classification and is limited to only 10 OTU. While, the study as reported by Hulcr et al. A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable Plos one. Nov 7, 2012, has more than 1000s genus.

3. One recommendation is to look for a control dataset and compare it to this dataset to improve biodiversity in the human population either by performing the multiple sample analysis or limiting the study to one particular categorical study to the control dataset.
Hulcr, J. et al.(2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/
