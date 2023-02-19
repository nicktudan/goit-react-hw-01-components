import styled from "styled-components";

export const TransactionTable = styled.table`
    width: 50%;
    margin: 20px auto;
    text-align: center;
    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`;

export const TransactionThead = styled.thead`
    font-size: 20px;
    text-transform: uppercase;
    background-color: #0000FF;
    color: #FFFFFF;
`;

export const TransactionTheadData = styled.th`
    padding: 16px 0;
    outline: 1px solid #808080;
`;

export const TransactionTableRow = styled.tr`
    &:nth-of-type(2n) {
        background-color: #b7e1eb;
    }
`;

export const TransactionTableData = styled.td`
    font-size: 20px;
    padding: 16px 0;
    outline: 1px solid #808080;
`;
