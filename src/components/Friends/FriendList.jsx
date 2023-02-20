import PropTypes from 'prop-types'; 
import { FriendListItem } from "./FriendListItem" 
import { FriendsList } from './Friends.styled'

export const FriendList = ({ friends }) => {
    return <FriendsList>
        {friends.map(friend => {
            return <FriendListItem friend={friend} key={friend.id} />
        })}
    </FriendsList>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
}