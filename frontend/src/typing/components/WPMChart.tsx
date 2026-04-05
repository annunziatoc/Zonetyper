
import useTypingStore from "../hooks/useTypingStore"
import styles from './WPMChart.module.css'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

const WPMChart = () => {

    const { wpmHistory } = useTypingStore()
    return (
        <div className={styles.chartContainer}>
            <LineChart  responsive width="100%" height="100%" style={{ width: '100%', aspectRatio: 1.618, maxWidth: 800, margin: 'auto' }} data={wpmHistory.slice(10).filter((entry, i , arr) => i === 0 || entry.time !== arr[i-1].time)}>
                <CartesianGrid stroke="var(--color-border-3)" strokeDasharray="5 5" />
                <XAxis dataKey="time" stroke="var(--charts-x-axis)" /> 
                <YAxis width="auto" stroke="var(--charts-y-axis)" />
                <Line
                    strokeWidth={2.3} 
                    type="monotone"
                    dot={false}
                    dataKey="wpm"
                    stroke="var(--charts-line-stroke)"
                />
            </LineChart>
        </div >
    )
}

export default WPMChart;
