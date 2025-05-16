"use client"
import axios from 'axios';
import React, { useState , useEffect } from 'react';


const UserDetail = () => {
    const [userList, setUserList] = useState([]);
    const fetchUsers = () => {
        axios.get('http://localhost:5000/user/getall', {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((result) => {
                console.table(result.data);
                setUserList(result.data);
            }).catch((err) => {
                console.log(err);

                if (err?.response?.status === 403) {
                    toast.error('You are not authorized to view this page');
                    router.push('/login');
                }
            });
    }

    useEffect(() => {
        fetchUsers();
    }, [])
    return (
        <div>UserDetail
            {
                userList.map((user) => {
                    return (
                        <h1>{user.email}</h1>
                    )
                
                }) 
            }

        </div>

    )
}

export default UserDetail