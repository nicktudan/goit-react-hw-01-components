import PropTypes from 'prop-types'; 
import {
    FriendsListItem,
    FriendsListItemAvatar,
    FriendsListItemName,
    FriendsListStatus,
} from './Friends.styled'

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return <FriendsListItem>
        <FriendsListStatus status={isOnline}></FriendsListStatus>
        <FriendsListItemAvatar src={avatar} alt={name} width="72" />
        <FriendsListItemName>{name}</FriendsListItemName>
    </FriendsListItem>
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
}