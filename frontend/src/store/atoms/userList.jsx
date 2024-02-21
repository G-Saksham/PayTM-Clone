import {atom, selector} from 'recoil'

export const userList = atom({
    key: "userList",
    default: []
})

export const currentUserAtom = atom({
    key: "currentUserAtom",
    default: {
        _id: "132564",
        firstName: "User",
        lastName: "1"
    }
})

export const usersAtom = atom({
    key: "usersAtom",
    default: [{
        _id: "00000",
        firstName: "User",
        lastName: "1"
    }]
})

export const balanceAtom = atom({
    key: "balanceAtom",
    default: "$0",
})

export const dataAtom = atom({
    key: "dataAtom",
    default: {
        currentUser: {
            _id: "132564",
            firstName: "User",
            lastName: "1"
        },
        users: [{
            _id: "132564",
            firstName: "User",
            lastName: "1"
        }],
    }
})

