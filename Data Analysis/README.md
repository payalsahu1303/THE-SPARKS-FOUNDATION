# SampleSuperstore Exploratory Data Analysis

This project aims to perform Exploratory Data Analysis (EDA) on the 'SampleSuperstore' dataset to identify weak areas in the business where improvements can be made to increase profits. Additionally, we will explore potential business problems by analyzing the data.

## Objective

- Perform 'Exploratory Data Analysis' on the 'SampleSuperstore' dataset.
- Identify weak areas in the business where improvements can lead to increased profits.
- Explore potential business problems through data analysis.

## Getting Started

To run this analysis, you will need the following Python libraries installed:

- numpy
- pandas
- seaborn
- plotnine
- matplotlib
- plotly
- sklearn

## Dataset Information

The 'SampleSuperstore' dataset contains information about sales and profits in a retail superstore. It includes the following columns:

- Ship Mode
- Segment
- Country
- City
- State
- Postal Code
- Region
- Category
- Sub-Category
- Sales
- Quantity
- Discount
- Profit

The dataset has 9994 entries and 13 columns.

## Data Analysis

### Data Summary
- Check for missing values (No missing values found).
- Check for duplicate rows (17 duplicate rows found and removed).
- Explore data types and basic statistics of numerical columns.

### Data Visualization
- Visualize the relationship between sub-categories and categories.
- Explore correlations and covariances between variables.
- Visualize the distribution of sales, quantity, discount, and profit.
- Count the total repeatable states and visualize state-wise data.
- Create a pie chart to show profit and loss for each sub-category.
- Analyze sales and profit by ship mode and category.
- Explore pair plots to identify data distribution and outliers.

### Business Insights
- Identify the top and bottom performing states based on profit.
- Analyze product categories and sub-categories that contribute to profit and loss.
- Investigate sales and profit trends in different market segments.
- Utilize K-Means clustering to segment data based on sales, quantity, discount, and profit.


## Conclusion

The exploratory data analysis reveals insights into the 'SampleSuperstore' dataset, highlighting areas where improvements can be made to increase profits. Key findings include:

- Identifying states and product categories that contribute to higher profits.
- Analyzing market segments to tailor strategies for better performance.
- Visualizing correlations between variables and identifying outliers.

To make informed decisions and address business problems, further analysis, such as factor analysis or neural networks, may be necessary. Additionally, it's important to consider that discounts, despite causing some losses, are an essential part of the company's business strategy to attract and retain customers.
