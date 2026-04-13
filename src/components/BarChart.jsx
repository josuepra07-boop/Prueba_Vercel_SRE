import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

function BarChart({ labels, values, horizontal = false }) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Solicitudes',
        data: values,
        borderWidth: 1
      }
    ]
  }

  const options = {
    indexAxis: horizontal ? 'y' : 'x',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      },
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: horizontal ? 0 : 45,
          minRotation: 0
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <div className="chart-box">
      <Bar data={data} options={options} />
    </div>
  )
}

export default BarChart