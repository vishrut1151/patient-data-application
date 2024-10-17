# Patient Data Dashboard

## Overview

This project is a web-based **Patient Data Dashboard** that displays critical healthcare information in an organized and visually appealing way. The dashboard is built using **HTML, CSS, JavaScript**, and utilizes **Chart.js** for interactive charts. It allows healthcare professionals to view a patient’s historical diagnosis data, laboratory results, and essential health metrics like blood pressure, respiratory rate, and temperature.

## Features

- **Patient List Navigation**: Displays all patients, allowing easy navigation between different profiles.
- **Diagnosis History Visualization**: Uses **Chart.js** to plot blood pressure data (systolic and diastolic) over the last 6 months, offering an intuitive graphical representation.
- **Health Metric Cards**: Shows key metrics like respiratory rate, temperature, and heart rate in easily readable cards.
- **Lab Results**: Presents lab test information in a scrollable list for quick access.
- **Profile Information**: Displays essential patient information including contact details, emergency contact, date of birth, and insurance provider.

## Technologies Used

- **HTML5** for structuring the content.
- **CSS3** for styling the components, including a responsive design using **flexbox** and **grid**.
- **JavaScript** for dynamic data rendering and interaction logic.
- **Chart.js** for interactive line charts to display health metrics.
- **Adobe XD** designs were used as the basis for creating the UI, ensuring a user-friendly experience.

## Key Implementation Details

- **Dynamic Data Rendering**: The data is fetched through an API and displayed in various sections, ensuring the dashboard is updated with the latest patient details.
- **Responsive Layout**: The design follows a responsive approach to adapt to different screen sizes, making it usable on both desktops and tablets.
- **Custom Styling**: The CSS is tailored to match the Adobe XD design, ensuring consistency in font sizes, colors, and spacing.
- **Interactive Line Chart**: Blood pressure readings for the last 6 months are shown using **Chart.js** with smooth line curves, tooltips, and highlighted data points.
- **Scroll Functionality**: Certain components, such as the patient list and diagnostic tables, are scrollable to maintain a compact and clean layout.

## Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/patient-data-dashboard.git
   ```
2. **Navigate to Project Directory**
   ```bash
   cd patient-data-dashboard
   ```
3. **Open in Browser**
   Simply open `index.html` in your preferred browser to view the dashboard.

## Future Improvements

- **User Authentication**: Add login functionality for secure access.
- **Data Filters**: Enable filtering health data by different ranges (e.g., last year, custom date range).
- **Export Options**: Allow users to export patient data in CSV or PDF format.
- **Additional Charts**: Integrate more types of charts to visualize other health metrics over time.

## Acknowledgements

- **Coalition Technologies** for providing the API used for the skills test.
- **Adobe XD** for providing the design template used to create this interface.

## License

This project is licensed under the **MIT License**. Feel free to use and modify as per your requirements.

## Contact

For any questions or suggestions, feel free to reach out via [GitHub](https://github.com/yourusername).

---

Thank you for checking out the **Patient Data Dashboard**! If you find it helpful, consider giving it a star ⭐.
