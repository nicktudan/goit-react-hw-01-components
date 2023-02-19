import styled from "styled-components";

export const ProfileConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
    border-radius: 4px;
    box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
    cursor: pointer;

    &:hover,
    &:focus {
        box-shadow: 0 4px 16px rgb(0 0 0 / 40%);
    }
`;

export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 24px;
`;

export const ProfileAvatar = styled.img`
    display: flex;
    border: 4px solid rgb(0 0 0 / 40%);
    border-radius: 50%;
    max-width: 40%;

    &:hover,
    &:focus {
        border: 4px solid #0000ff;
        box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
    }
`;

export const ProfileName = styled.p`
    padding-top: 48px;
    padding-bottom: 24px;
    font-weight: 600;
`;

export const ProfileTag = styled.p`
    color: 	rgb(0 0 0 / 40%);

    &:hover,
    &:focus {
        color: #0000ff;
    }
`;

export const ProfileLocation = styled.p`
    padding-top: 24px;
    padding-bottom: 24px;
    color: 	rgb(0 0 0 / 40%);
`;

export const ProfileStatsList = styled.ul`
    display: flex;
    width: 100%;
    border-top: 1px solid rgb(0 0 0 / 40%);
`;

export const ProfileStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding-top: 24px;
    padding-bottom: 24px;
    background-color: #c0c0c0;

    &:not(:last-child) {
        border-right: 1px solid rgb(0 0 0 / 40%);
    }

    &:hover,
    &:focus {
        background-color: #0000ff;
    }
`;

export const ProfileStatsItemLabel = styled.span`
    padding-bottom: 8px;
    color: rgb(0 0 0 / 40%);
`;

export const ProfileStatsItemQuantity = styled.span`
    font-weight: 600;
`;