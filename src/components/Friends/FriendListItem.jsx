import PropTypes from 'prop-types'; 

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return <div>
        <span class="{isOnline ? statusOnline : statusOffline}">{isOnline}</span>
        <img class="avatar" src={avatar} alt={name} width="48" />
        <p class="name">{name}</p>
    </div>
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
}