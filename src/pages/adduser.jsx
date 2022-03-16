import React from 'react';
import AddUser from '../components/addUser'
import {useContext,useState,useEffect} from 'react'
import{UserContext} from '../module/usersModule'
const AddUserPage = () => {
    const{addUserForm,isEnabled}=useContext(UserContext)
    return <AddUser AddUser={addUserForm} isEnabled={isEnabled}/>
};

export default AddUserPage;