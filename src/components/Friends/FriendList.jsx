import PropTypes from 'prop-types'; 
import { FriendListItem } from "./FriendListItem" 
import { FriendsList } from './Friends.styled'

export const FriendList = ({ friends }) => {
    return <FriendsList>
        {friends.map(friend => {
            return <li key={friend.id}>
                <FriendListItem friend={friend} />
            </li>
        })}
    </FriendsList>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
}