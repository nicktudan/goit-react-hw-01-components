import PropTypes from 'prop-types'; 
import { FriendsListItem, FriendsListItemAvatar, FriendsListItemName } from './Friends.styled'

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return <FriendsListItem>
        <span class="{isOnline ? statusOnline : statusOffline}">{isOnline}</span>
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