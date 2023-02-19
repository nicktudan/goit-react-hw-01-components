import styled from "styled-components";


export const FriendsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 20%;
    margin: 0 auto;
`;

export const FriendsListItem = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgb(0 0 0 / 5%);
    border-radius: 4px;
    gap: 12px;
    padding: 8px;
    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
    cursor: pointer;

    &:hover,
    &:focus {
        box-shadow: 0 4px 16px rgb(0 0 0 / 40%);
    }
`;

export const FriendsListStatus = styled.span`
    height: 16px;
    width: 16px;
    border-radius: 50%;

    ${({ status }) => {
    if (status) {
        return 'background-color: #32CD32;'
    } else if (!status) {
        return 'background-color: #FF0000;'
    } else {
        return 'background-color: #808080;'
    }
    }}
`;

export const FriendsListItemAvatar = styled.img`
    border: 1px solid rgb(0 0 0 / 10%);
    border-radius: 8%;
`;

export const FriendsListItemName = styled.p`
    font-size: 24px;
    font-weight: 600;
`;