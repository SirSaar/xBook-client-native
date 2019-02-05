import { users } from "../models/users";

export const getReading = async (userId) => {
    return users[userId].reading;
}

export const getShelf = async (userId) => {
    return users[userId].shelf;
}

export const getBalance = async (userId) => {
    const given = users[userId];
    const received = users[userId];
    return {given, received};
}