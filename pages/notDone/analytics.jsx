import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library

const Analytics = () => {
    const chartContainer = useRef(null); // Reference to the bar chart canvas element
    const doughnutChartContainer = useRef(null); // Reference to the doughnut chart canvas element

    useEffect(() => {
        // Chart.js configuration for the bar chart
        const data = {
            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct'],
            datasets: [
                {
                    label: 'Student',
                    backgroundColor: 'rgba(204, 102, 0, 0.9)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81]
                },
                {
                    label: 'College',
                    backgroundColor: 'rgba(0, 77, 77, 0.7)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    data: [50, 45, 70, 75, 60, 50, 45, 60, 50, 45]
                }
            ]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                indexAxis: 'x', // Use x-axis for category labels
                grouped: true, // Join bars by category
                barPercentage: 1.0, // Adjust width of bars
                categoryPercentage: 0.8 // Adjust spacing between bars within a category
            }
        };

        const doughnutData = {
            labels: ['Student', 'College'],
            datasets: [
                {
                    label: 'Student vs College',
                    backgroundColor: ['rgba(204, 102, 0, 0.9)', 'rgba(0, 77, 77, 0.7)'],
                    data: [65, 50]
                }
            ]
        };

        const doughnutConfig = {
            type: 'doughnut',
            data: doughnutData,
            options: {}
        };

        // Create Chart.js instance for the bar chart
        const barChart = new Chart(chartContainer.current, config);

        // Create Chart.js instance for the doughnut chart
        const doughnutChart = new Chart(doughnutChartContainer.current, doughnutConfig);

        // Cleanup function to destroy the charts when the component unmounts
        return () => {
            barChart.destroy();
            doughnutChart.destroy();
        };
    }, []);

    return (
        <div className="flex min-h-screen mt-16">
            <main className="bg-white text-black flex-1 p-2">
                <header>
                    <div className="bg-cyan-700 p-4 rounded-lg">
                        <h1 className="text-2xl text-white">Analytics</h1>
                    </div>
                </header>
                {/* Division for the charts */}
                <div className='flex'>
                    <div className='font-bold text-2xl'> 
                    <h1> Application trends</h1>
                    </div>
                    <div style={{ width: '80%', height: '80%' }} className='mt-10'>
                        {/* Canvas element for the bar chart */}
                        <canvas ref={chartContainer}></canvas>
                    </div>
                </div>


                <div className='flex'>
                    <div style={{ width: '20%', height: '400px' }}>
                        {/* Canvas element for the doughnut chart */}
                        <canvas ref={doughnutChartContainer}></canvas>
                    </div>
                </div>
            </main >
        </div >
    );
};

export default Analytics;
