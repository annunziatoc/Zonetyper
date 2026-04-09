
import useTypingStore from "../hooks/useTypingStore"
import styles from './WpmChart.module.css'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const WpmChart = () => {

    const { wpmHistory } = useTypingStore()
    return (
        <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart  data={wpmHistory.slice(10).filter((entry, i, arr) => i === 0 || entry.time !== arr[i - 1].time)}>
                    <CartesianGrid stroke="var(--color-border-3)" strokeDasharray="5 5" />
                    <XAxis dataKey="time" stroke="var(--charts-x-axis)" />
                    <YAxis width="auto" stroke="var(--charts-y-axis)" />
                    <Line
                        activeDot={false}
                        strokeWidth={2.3}
                        type="monotone"
                        dot={false}
                        dataKey="wpm"
                        stroke="var(--charts-line-stroke)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div >
    )
}

export default WpmChart;
