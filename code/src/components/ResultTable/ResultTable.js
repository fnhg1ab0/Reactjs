import styles from './ResultTable.module.css';

const ResultTable = (props) => {
    const formatNumber = Intl.NumberFormat(
        'en-US',
        {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }
    );

    return (
        <table className={styles.result}>
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map((data)=>(
                <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatNumber.format(data.savingsEndOfYear)}</td>
                    <td>{formatNumber.format(data.yearlyInterest)}</td>
                    <td>{ formatNumber.format(
                        data.savingsEndOfYear -
                                props.current -
                        data.yearlyContribution * data.year
                    )}</td>
                    <td>{ formatNumber.format(
                        props.current +
                        data.yearlyContribution * data.year
                    )}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
export default ResultTable;