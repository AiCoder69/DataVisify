# DataVisify

## Overview

**DataVisify** is a web application that allows users to upload CSV files and generate interactive graphs and visualizations based on the data. It leverages Plotly.js for creating a variety of chart types to help users analyze their data efficiently.

![DataVisify Interface](https://example.com/image.png)

The image shows the interface of a data visualization platform called DataVisify. The interface allows users to upload CSV files for data analysis. The "Data Preview" section displays the first five rows of a dataset, which appears to be related to Titanic passengers, including columns for passenger ID, survival status, class, name, sex, age, siblings/spouses aboard, parents/children aboard, ticket number, fare, cabin, and embarkation port. Below the data preview, there is a line chart visualizing the relationship between the number of parents/children aboard (Parch) on the x-axis and age on the y-axis. The chart shows a distribution of ages across different values of Parch, with green bars representing age data points.

## Features

- Upload CSV files for data visualization
- Interactive and responsive charts
- Supports various chart types (bar, line, scatter, etc.)
- Easy to use interface

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AiCoder69/DataVisify.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd DataVisify
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Usage

1. **Upload your CSV file:**
   - Click on the "Upload" button and select your CSV file.

2. **View visualizations:**
   - The application will parse the CSV data and generate interactive charts.

3. **Interact with charts:**
   - Use the Plotly.js features to explore and analyze the visualizations.

## Contributing

We welcome contributions! If you'd like to contribute to this project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature-branch
   ```
3. **Make your changes.**
4. **Commit your changes:**
   ```bash
   git commit -m 'Add some feature'
   ```
5. **Push to the branch:**
   ```bash
   git push origin feature-branch
   ```
6. **Create a new Pull Request.**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

