import PropTypes from 'prop-types'; 
import {
    TransactionTable,
    TransactionThead,
    TransactionTheadData,
    TransactionTableRow,
    TransactionTableData,
} from './Transactions.styled'

export const TransactionHistory = ({ items }) => {
    return <TransactionTable>
        <TransactionThead>
            <tr>
                <TransactionTheadData>Type</TransactionTheadData>
                <TransactionTheadData>Amount</TransactionTheadData>
                <TransactionTheadData>Currency</TransactionTheadData>
            </tr>
        </TransactionThead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return <TransactionTableRow key={id}>
                    <TransactionTableData>{type}</TransactionTableData>
                    <TransactionTableData>{amount}</TransactionTableData>
                    <TransactionTableData>{currency}</TransactionTableData>
                </TransactionTableRow>
            })}
        </tbody>
    </TransactionTable>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
}
