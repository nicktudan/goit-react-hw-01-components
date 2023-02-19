import styled from "styled-components";


export const FriendsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    /* align-items: center; */
    width: 20%;
    /* height: auto; */
    margin: 0 auto;
`;

export const FriendsListItem = styled.div`
    display: flex;
    align-items: center;
    /* width: 100%;
    height: 100%; */
    border: 1px solid rgb(0 0 0 / 5%);
    border-radius: 4px;
    padding: 8px;
    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
    cursor: pointer;

    &:hover,
    &:focus {
        box-shadow: 0 4px 16px rgb(0 0 0 / 40%);
    }
`;

export const FriendsListItemAvatar = styled.img`
    /* display: flex; */
    border: 1px solid rgb(0 0 0 / 10%);
    border-radius: 8%;
    /* max-width: 60%; */
    margin-right: 16px;
    padding: 4px;
`;

export const FriendsListItemName = styled.p`
    font-size: 24px;
    font-weight: 600;
`;