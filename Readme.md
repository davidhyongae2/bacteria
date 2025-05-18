## Project
Bacteria Counting Dashboard 

## Overview
This JavaScript application effectively counts Operational Taxonomic Units (OTUs), highlighting the similarity among genera. By leveraging JSON and D3.js, it filters volunteer data to prominently display the ten bacterial species along with their respective OTUs. Users can effortlessly hover over the bar chart to gain insightful details about each species.

## Tools Used
Program language: JavaScript, plotly, d3.js.

## Data
JSON data from http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/

## Results
JavaScript, Plotly, and D3.js are used to create a horizontal bar chart for displaying human volunteers (OTUs) with D3 dropdown functions.

![Figure 1](https://github.com/davidhyongae2/bacteria/blob/main/Figure1.png).

The bubble chart visually represents the diversity of bacteria species classified by Operational Taxonomic Units (OTUs). Each sample is characterized by attributes including ID, ethnicity, gender, location, age, and frequency, while also demonstrating the overlap of OTUs at the sample level.

![Figure 2a](https://github.com/davidhyongae2/bacteria/blob/main/Figure2a.png)

A gauge chart effectively illustrates the frequency of volunteers who wash their belly buttons, allowing for comparison with a bar chart or bubble chart. It highlights the relationship between operational taxonomic units (OTUs) in the samples and the associated bacterial genera, thereby showcasing biodiversity. The initial sample exhibits a higher number of OTUs, while greater variation is observed with increased sampling. Further research is necessary to enhance hospital care and clinical testing practices.

![Figure 2b](https://github.com/davidhyongae2/bacteria/blob/main/Figure2b.png).

## Discussion
1. Describe how to utilize D3.js and Plotly to transform `sample.json` into a functional web application.

2. One limitation of this dataset is its lack of clear phylogenetic classification and its focus on only 10 OTU. In contrast, the study by Hulcr et al., titled "A Jungle in There: Bacteria in Belly Buttons Are Highly Diverse but Predictable," published in PLOS ONE on November 7, 2012, includes data on thousands of genera.

3. One suggestion is to utilize a control dataset for comparison purposes. This could enhance our understanding of biodiversity within the human population through multiple sample analyses or by focusing on a specific categorical study.

Hulcr, J. et al. (2012). A Jungle in There: Bacteria in Belly Buttons Are Highly Diverse but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/
