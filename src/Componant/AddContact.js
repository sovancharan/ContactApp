import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';
import { createBrowserHistory, parsePath } from 'history';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const navigate=useNavigate()

    //  console.log('A=', contacts);

    //  validation
    const checkEmail = contacts.find(
        (contact) => contact.email === email && email
    );

    const checkNumber = contacts.find(
        (contact) => contact.number === parseInt(number) && parseInt(number)
    );
    //  console.log('Number=', checkNumber);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !number) {
            return toast.warning('please fill the all fields!');
        }
        if (checkEmail) {
            console.log('email', checkEmail.email);
            return toast.error('This email already exists!');
        }
        if (checkNumber) {
            return toast.error('This number is already exists!');
        }
      //   let num = parseInt(number);
        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number,
        };
        console.log('Data=', data);
        dispatch({ type: 'ADD_CONTACT', payload: data });
        toast.success('Submit the from sucessfully');
     navigate("/")

        console.log('hi');

        //   console.log('State=', contacts);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className=" fs-1 pt-5 pb-3 fw-bolder text-center">
                        Add Student
                    </h1>
                    <div className="col-md-6 shadow mx-auto py-5 px-0">
                        <form onSubmit={handleSubmit}>
                            <div className="from-group ">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="from-control w-75 py-2 border-0 shadow ps-2"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="from-group">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="from-control my-2 w-75 py-2 border-0 shadow ps-2"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="from-group">
                                <input
                                    type="number"
                                    placeholder="Ph number"
                                    className="from-control w-75 py-2 border-0 shadow ps-2"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>
                            <div className="from-group">
                                <input
                                    type="submit"
                                    value="Add student"
                                    className="btn btn-block btn-dark mt-3 w-75"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddContact;
