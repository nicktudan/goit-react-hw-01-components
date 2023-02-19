import PropTypes from 'prop-types'; 
import {
    ProfileConteiner,
    ProfileDescription,
    ProfileAvatar,
    ProfileName,
    ProfileTag,
    ProfileLocation,
    ProfileStatsList,
    ProfileStatsItem,
    ProfileStatsItemLabel,
    ProfileStatsItemQuantity
} from './Profile.styled';


export const Profile = ({ avatar, username, tag, location, stats }) => {
    return <ProfileConteiner>
    <ProfileDescription>
        <ProfileAvatar
        src={avatar}
        alt={username}
        />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
        
    </ProfileDescription>

    <ProfileStatsList>
        <ProfileStatsItem>
            <ProfileStatsItemLabel>Followers</ProfileStatsItemLabel>
            <ProfileStatsItemQuantity>{stats.followers}</ProfileStatsItemQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
            <ProfileStatsItemLabel>Views</ProfileStatsItemLabel>
            <ProfileStatsItemQuantity>{stats.views}</ProfileStatsItemQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
            <ProfileStatsItemLabel>Likes</ProfileStatsItemLabel>
            <ProfileStatsItemQuantity>{stats.likes}</ProfileStatsItemQuantity>
        </ProfileStatsItem>
    </ProfileStatsList>
</ProfileConteiner>
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
}