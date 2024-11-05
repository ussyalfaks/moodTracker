import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const moodValues = {
  amazing: 5,
  good: 4,
  okay: 3,
  bad: 2,
  terrible: 1,
};

export function MoodChart({ entries }) {
  const labels = entries.map(entry => format(new Date(entry.timestamp), 'MMM d'));

  const data = {
    labels,
    datasets: [
      {
        label: 'Mood',
        data: entries.map(entry => moodValues[entry.mood]),
        borderColor: '#629878',
        backgroundColor: '#629878',
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#629878',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 1,
        max: 5,
        ticks: {
          stepSize: 1,
          callback: (value) => Object.keys(moodValues).find(key => moodValues[key] === value) || '',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const mood = Object.keys(moodValues).find(key => moodValues[key] === context.raw);
            return `${mood ? mood.charAt(0).toUpperCase() + mood.slice(1) : ''}`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-[400px]">
      <Line data={data} options={options} />
    </div>
  );
}

MoodChart.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.string.isRequired,
      mood: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoodChart;
