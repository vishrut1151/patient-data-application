function renderBloodPressureChart(diagnosisHistory, monthsCount = 6) {
    // Get the latest monthsCount of data and reverse it to show latest first
    const latestMonthsData = diagnosisHistory.slice(0, 6).reverse();

    const ctx = document.getElementById('bloodPressureChart').getContext('2d');
    const months = latestMonthsData.map(entry => entry.month + ' ' + entry.year);
    const systolicData = latestMonthsData.map(entry => entry.blood_pressure.systolic.value);
    const diastolicData = latestMonthsData.map(entry => entry.blood_pressure.diastolic.value);

    // Updating the value of the Right side of the chart values
    const latestEntry = latestMonthsData[latestMonthsData.length - 1];
    document.getElementById('systolic-value').textContent = latestEntry.blood_pressure.systolic.value;
    document.getElementById('systolic-status').textContent = latestEntry.blood_pressure.systolic.levels;
    document.getElementById('diastolic-value').textContent = latestEntry.blood_pressure.diastolic.value;
    document.getElementById('diastolic-status').textContent = latestEntry.blood_pressure.diastolic.levels;


    new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Systolic',
                    data: systolicData,
                    borderColor: '#E66FD2',
                    backgroundColor: '#E66FD2',
                    fill: false,
                    tension: 0.3,
                    pointRadius: 5,
                    borderWidth: 2,
                },
                {
                    label: 'Diastolic',
                    data: diastolicData,
                    borderColor: '#8C6FE6',
                    backgroundColor: '#8C6FE6 ',
                    fill: false,
                    tension: 0.3,
                    pointRadius: 5,
                    borderWidth: 2,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                    position: 'right',
                    labels: {
                        font: {
                            family: 'var(--unnamed-font-family-manrope)',
                            weight: 'var(--unnamed-font-weight-bold)',
                            size: 14,
                        },
                        usePointStyle: true,
                        padding: 20,
                        color: 'var(--unnamed-color-072635)',

                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: false,
                        text: 'Months',
                        font: {
                            family: 'var(--unnamed-font-family-manrope)',
                            weight: 'var(--unnamed-font-weight-normal)',
                            size: 16,
                        },
                        color: 'var(--unnamed-color-072635)',
                    },
                    ticks: {
                        color: 'var(--unnamed-color-072635)',
                    },
                },
                y: {
                    beginAtZero: false,
                    ticks: {
                        stepSize: 20, // Set interval of Y-axis to 20 units
                        color: 'var(--unnamed-color-072635)',
                    },
                    title: {
                        display: false,
                        text: 'Blood Pressure (mm Hg)',
                        font: {
                            family: 'var(--unnamed-font-family-manrope)',
                            weight: 'var(--unnamed-font-weight-normal)',
                            size: 16,
                        },
                        color: 'var(--unnamed-color-072635)',
                    },
                }
            }
        }
    });
}
