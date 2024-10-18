import { ImInsertTemplate } from "react-icons/im";
import { diagnosis_history } from "../defintions";
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
import { useState } from "react";
  
  

export default function Chart({ diagnosis_history }: { diagnosis_history: diagnosis_history[] }) {
  const [range, Setrange] = useState<number>(12);
  const handleRangeChange = (event:any) => { 
    Setrange(event.target.value)
  }
  const recentHistory  = diagnosis_history.slice(-range)
    const labels = recentHistory.map(item=>`${item.month },${item.year}`).reverse()
    const systolicData = recentHistory.map(item => item.blood_pressure.systolic.value).reverse();
    const diastolicData =recentHistory.map(item => item.blood_pressure.diastolic.value).reverse();
    const data = {
        labels: labels,
        datasets: [
          
                {
                  data: systolicData,
                  borderColor: 'rgba(255, 99, 132, 1)',
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  
                tension: 0,
                pointRadius: 5,
                pointHoverRadius: 8,
                interaction: {
                    intersect: false,
                  } ,
                },
                {
                  data: diastolicData,
                  borderColor: 'rgba(54, 162, 235, 1)',
                  
                  tension: -0.1,
                },
        ],
      };
    const options: ChartOptions<'line'> = {
        responsive: true,
      scales: {
        x: {
          ticks: {
            maxTicksLimit: range, // Limit to show only 7 labels on the x-axis
          },
        },
        y: {
        
        }
      },
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
    
  return (
      <div>
        <select className="text-xs bg-white" id="rangeSelect" value={range} onChange={handleRangeChange}>
          <option value={3}>Last 3 mounth</option>
          <option value={6}>Last 6 mounth</option>
          <option value={12}>Last 1 year</option>
          <option value={diagnosis_history.length}>All</option>
        </select>
    < Line data = { data } options = { options } />;
      </div>
  )
    };
 