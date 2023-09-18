import './Chart.css';
import ChartBar from './ChartBar';
const Chart = (props) => {
    let totalMax = 0;
    for (const data of props.dataPoints) {
        totalMax += data.value;
    }

    return(
        <div className="chart">
            { props.dataPoints.map((data) => (
                <ChartBar
                    key={data.label}
                    label={data.label}
                    value={data.value}
                    max={totalMax}
                />
            ))}
        </div>
    );
}
export default Chart;