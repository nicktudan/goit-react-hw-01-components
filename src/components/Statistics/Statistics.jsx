import PropTypes from 'prop-types'; 
import {
    StatisticsSection,
    StatisticsTitle,
    StatisticsList,
    StatisticsItem,
    StatisticsItemLabel,
    StatisticsPercentage,
} from './Statistics.styled'


function getRandomHexColor() {
    let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return bgColor;
}


export const Statistics = ({ title, stats }) => {
    return <StatisticsSection>
        <StatisticsTitle>{title}</StatisticsTitle>

        <StatisticsList>
            {stats.map(({ id, label, percentage }) => {
                return  <StatisticsItem key={id} style={{backgroundColor: getRandomHexColor()}}>
                    <StatisticsItemLabel>{label}</StatisticsItemLabel>
                    <StatisticsPercentage>{percentage}%</StatisticsPercentage>
                </StatisticsItem>
            })}
        </StatisticsList>
</StatisticsSection>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}