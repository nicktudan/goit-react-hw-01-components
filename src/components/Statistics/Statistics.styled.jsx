import styled from "styled-components";


export const StatisticsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`;

export const StatisticsTitle = styled.h2`
    padding: 48px;
    font-size: 36px;
    text-transform: uppercase;
    color: rgb(0 0 0 / 80%);
`;

export const StatisticsList = styled.ul`
    width: 100%;
    display: flex;
`;

export const StatisticsItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 12px;
    color: 	#ffffff;
    text-shadow: 2px 2px 4px #000000;
`;

export const StatisticsItemLabel = styled.span`
    font-size: 16px;
    padding-bottom: 8px;
`;

export const StatisticsPercentage = styled.span`
    font-size: 24px;
    font-weight: 500;
`;