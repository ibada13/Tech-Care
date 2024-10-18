import { ImInsertTemplate } from "react-icons/im";
import { patient } from "../defintions";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
  } from 'chart.js';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend
  );  
import { Line } from "react-chartjs-2";
  
  

export default function Chart({ Patient }: { Patient: patient }) {
    const labels = Patient["diagnosis_history"].map(item=>`${item.month },${item.year}`)
    const systolicData = Patient["diagnosis_history"].map(item => item.blood_pressure.systolic.value);
    const diastolicData = Patient["diagnosis_history"].map(item => item.blood_pressure.diastolic.value);
    const data = {
        labels: labels,
        datasets: [
          
                {
                  label: 'Systolic Blood Pressure',
                  data: systolicData,
                  borderColor: 'rgba(255, 99, 132, 1)',
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  fill: true,
                tension: 0,
                pointRadius: 5,
                pointHoverRadius: 8,
                interaction: {
                    intersect: false,
                  } ,
                },
                {
                  label: 'Diastolic Blood Pressure',
                  data: diastolicData,
                  borderColor: 'rgba(54, 162, 235, 1)',
                  backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  fill: true,
                  tension: 0.1,
                },
        ],
      };
    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Health Metrics Over Time',
          },
        },
      };
    
      return <Line data={data} options={options} />;
    };
 