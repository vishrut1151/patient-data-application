document.addEventListener('DOMContentLoaded', function () {
    // Placeholder function to fetch data
    async function fetchData() {
        const username = 'coalition';
        const password = 'skills-test';
        const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';

        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': 'Basic ' + btoa(`${username}:${password}`)
                }
            });

            if (response.ok) {
                const data = await response.json();

                // Filter to find Jessica Taylor
                const jessicaData = data.find(patient => patient.name === "Jessica Taylor");
                if (jessicaData) {
                    populateProfileSection(jessicaData);
                    populateDiagnosisHistory(jessicaData);
                    populateDiagnosticList(jessicaData);
                    populateLabResults(jessicaData);

                    // Render the blood pressure chart using Jessica's diagnosis history
                    renderBloodPressureChart(jessicaData.diagnosis_history, 6);
                }

                // Populate the patient list dynamically
                populatePatientList(data);
            } else {
                // console.error('Failed to fetch patient data');
                console.error('Failed to fetch patient data:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Placeholder function to populate profile section
    function populateProfileSection(patientData) {

        //console.log(patientData);
        document.getElementById('profile-picture').src = patientData.profile_picture;
        document.getElementById('profile-name').textContent = patientData.name;
        document.getElementById('dob').textContent = new Date(patientData.date_of_birth).toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' });
        document.getElementById('gender').textContent = patientData.gender;
        document.getElementById('phone-number').textContent = patientData.phone_number;
        document.getElementById('emergency-contact').textContent = patientData.emergency_contact;
        document.getElementById('insurance-type').textContent = patientData.insurance_type;
    }

    // Placeholder function to populate Patients list
    function populatePatientList(patientList) {
        const patientListElement = document.getElementById('patient-list');

        // Clear existing patients if any
        patientListElement.innerHTML = '';

        // Loop through each patient in the data
        patientList.forEach((patient, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('patient-item');
            listItem.dataset.index = index;


            //debugger;


            // Create the image element for the patient
            const patientImage = document.createElement('img');
            patientImage.src = patient.profile_picture;
            patientImage.alt = patient.name;
            patientImage.classList.add('patient-image');


            // Add selected class if the patient is Jessica Taylor
            if (patient.name === 'Jessica Taylor') {
                listItem.classList.add('selected');
            } else {
                listItem.classList.remove('selected');
            }

            // Create the patient details container
            const patientDetails = document.createElement('div');
            patientDetails.classList.add('patient-details');

            // Create patient name and info
            const patientName = document.createElement('p');
            patientName.classList.add('body-regular-14', 'patient-name');
            patientName.textContent = patient.name;

            const patientInfo = document.createElement('p');
            patientInfo.classList.add('body-secondary-info-14pt', 'patient-info');
            patientInfo.textContent = `${patient.gender}, ${patient.age}`;


            // Append name, info, image and details to the patient details container
            patientDetails.appendChild(patientName);
            patientDetails.appendChild(patientInfo);
            listItem.appendChild(patientImage);
            listItem.appendChild(patientDetails);

            // Create the three dots div
            // const threeDots = document.createElement('img');
            // threeDots.classList.add('three-dots');
            const threeDots = document.createElement('img');
            threeDots.classList.add('three-dots');
            threeDots.src = 'assets/images/more_horiz_FILL0_wght300_GRAD0_opsz24.svg';
            threeDots.alt = 'Options';


            // Append
            listItem.appendChild(threeDots);

            // Append list item to the patient list
            patientListElement.appendChild(listItem);
        });
    }

    // Placeholder function to populate diagnosis history
    function populateDiagnosisHistory(patientData) {
        const latestDiagnosis = patientData.diagnosis_history[0]; // Assuming the first item is the most recent

        // Populate respiratory rate
        document.getElementById('respiratory-rate-value').textContent = `${latestDiagnosis.respiratory_rate.value} bpm`;
        document.getElementById('respiratory-rate-levels').textContent = latestDiagnosis.respiratory_rate.levels;

        // Populate temperature
        document.getElementById('temperature-value').textContent = `${latestDiagnosis.temperature.value}°F`;
        document.getElementById('temperature-levels').textContent = latestDiagnosis.temperature.levels;

        // Populate heart rate
        document.getElementById('heart-rate-value').textContent = `${latestDiagnosis.heart_rate.value} bpm`;
        document.getElementById('heart-rate-levels').textContent = latestDiagnosis.heart_rate.levels;
    }

    // Placeholder function to populate diagnostic list
    function populateDiagnosticList(patientData) {
        const diagnosticData = patientData.diagnostic_list;
        const diagnosticTableBody = document.getElementById('diagnostic-data');

        // Clear any existing rows
        diagnosticTableBody.innerHTML = '';

        // Populate diagnostic data
        diagnosticData.forEach(diagnostic => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = diagnostic.name;
            row.appendChild(nameCell);

            const descriptionCell = document.createElement('td');
            descriptionCell.textContent = diagnostic.description;
            row.appendChild(descriptionCell);

            const statusCell = document.createElement('td');
            statusCell.textContent = diagnostic.status;
            row.appendChild(statusCell);

            diagnosticTableBody.appendChild(row);
        });
    }

    // placeholder for populateLabResults
    function populateLabResults(patientData) {
        // const labResultsData = patientData.lab_results;
        // const labResultsList = document.getElementById('lab-results-list');

        // // Clear any existing list items
        // labResultsList.innerHTML = '';

        // // Populate lab results data
        // labResultsData.forEach(result => {
        //     const listItem = document.createElement('li');
        //     listItem.innerHTML = `${result} <button class="download-button">Download</button>`;
        //     labResultsList.appendChild(listItem);
        // });
        const labResultsData = patientData.lab_results;
        const labResultsList = document.getElementById('lab-results-list');

        // Remove existing items, leaving only the template
        const templateItem = labResultsList.querySelector('.lab-result-item');
        labResultsList.innerHTML = ''; // Clear all items
        labResultsList.appendChild(templateItem); // Keep the template item

        // Populate lab results data using the template
        labResultsData.forEach(result => {
            const newItem = templateItem.cloneNode(true);
            newItem.querySelector('.lab-result-text').textContent = result;
            labResultsList.appendChild(newItem);
        });

        // Remove the template item after cloning
        templateItem.remove();
    }



    // Call fetch data function
    fetchData();
});


// Boilerplate code.
// document.addEventListener('DOMContentLoaded', function () {
//     const username = 'coalition';
//     const password = 'skills-test';
//     const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';

//     async function fetchPatientData() {
//         const response = await fetch(url, {
//             headers: {
//                 'Authorization': 'Basic ' + btoa(`${username}:${password}`)
//             }
//         });

//         if (response.ok) {
//             const data = await response.json();
//             // Filter for Jessica Taylor's data
//             const jessicaData = data.find(patient => patient.name === "Jessica Taylor");
//             // TODO: Use Jessica's data to update UI
//         } else {
//             console.error('Failed to fetch patient data');
//         }
//     }

//     fetchPatientData();
// });
