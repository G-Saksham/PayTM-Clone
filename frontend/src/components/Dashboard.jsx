import { useEffect } from 'react'
import { Header } from './Header'
import { SearchBar } from './SearchBar'
import { SubHeader } from './SubHeader'
import { User } from './User'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import axios from 'axios';
import { balanceAtom, usersAtom, currentUserAtom } from '../store/atoms/userList'
import { useNavigate } from "react-router-dom"

export default function Dashboard () {
    const [users, setUsers] = useRecoilState(usersAtom);
    const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
    const [balance, setBalance] = useRecoilState(balanceAtom);
    const navigate = useNavigate();

    useEffect(() => {
        const allUsers = async () => {
            const auth = localStorage.getItem('auth');
            const response = await axios.get('http://localhost:3000/api/v1/user/', {
                headers: {
                    'authorization': auth,
                }
            });
            setUsers(response.data.users);
        }
        const user = async () => {
            const auth = localStorage.getItem('auth');
            const response = await axios.get('http://localhost:3000/api/v1/user/', {
                headers: {
                    'authorization': auth,
                }
            });
            setCurrentUser(response.data.currentUser);
        }
        Promise.allSettled([allUsers(), user()]);
    }, [setCurrentUser, setUsers])

    useEffect(() => {
        const userAccount = async() => {
            const auth = localStorage.getItem('auth');
            const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                headers: {
                    'authorization': auth,
                }
            });
            setBalance(parseFloat(response.data.balance).toFixed(2));
        }
        userAccount();
    }, [setBalance])

    let timer;
    
    return <div className=''>
        <div className='fixed top-o right-0 left-0 z-10 bg-gray-50'>
            <Header label = {"Payments App"} data={`Hello, ${currentUser?.firstName || 'User'}`} logo = {currentUser?.firstName[0] || 'U'} />
            <SubHeader label = "Your Balance" data = {`Rs.${balance}`} />
            <SubHeader label = "Users"/>
            <SearchBar placeholder = {"Search users..."} onChange={(e) => {
                const filter = e.target.value;
                clearTimeout(timer);
                if (filter.length != 0) {
                    timer = setTimeout(async () => {
                        const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
                        const filteredUsers = response.data;
                        setUsers(filteredUsers.users);
                    },1000)
                }
            }}/>
        </div>
        <div className='overflow-y relative top-56 z-0 bg-gray-50'>
            {users.map((user) => {
                return <User onClick = {() => {
                    localStorage.setItem('to', `${user._id}`);
                    localStorage.setItem('firstName', `${user.firstName}`)
                    localStorage.setItem('lastName', `${user.lastName}`)
                    navigate('/send');
                }} key = {user._id} data = {(user.firstName) + (" ") + (user.lastName )} logo = {(user.firstName[0]) + (user.lastName[0])} />
            })}
        </div>
    </div>
}