import React, {
    useState,
} from 'react';
import Router    from 'next/router';
import { toast } from 'react-toastify';

import Register    from './register';
import axiosClient from '../../helpers/axiosClient';

const RegisterContainer = () => {

    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		secret: "",
	});

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => {
        Router.push("/");
        setOpen(false)
    };

    const changeValue = ({ target: { name, value } }) => {
        setUser(prevState => ({...prevState, [name]: value}))
    };

    const handleSubmit = async() => {
    
        try {
          
            setIsLoading(true);
            await axiosClient.post("/register", user);
            onOpenModal();
    
        } catch (error) {
    
            toast.error(error?.response?.data?.msg)
            console.log(error);
        }
    };


    return (
        <Register
            delegations={{
                user,
                open,
                isLoading,
                changeValue,
                handleSubmit,
                onCloseModal,
            }}
        />
    );
};

export default RegisterContainer;
