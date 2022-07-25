import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        console.log('delete', typeof id);
        dispatch({ type: 'DELETE_CONTACT', payload: id });

        toast.success('Delete Sucessfully! ');
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 my-5 text-right">
                        <Link to="/add" className="btn btn-outline-dark">
                            Add contact
                        </Link>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <table className="table table-table-hover">
                            <thead className="text-white bg-dark text-center">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Number</th>
                                    <th scope="col ">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, id) => {
                                    return (
                                        <tr key={id}>
                                            <td>{id + 1}</td>
                                            <td>{contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.number}</td>
                                            <td>
                                                <Link
                                                    to={`/edit/${contact.id}`}
                                                    className="btn btn-primary btn-small"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    className="btn  btn-danger btn-small ms-2"
                                                    onClick={() =>
                                                        deleteContact(
                                                            contact.id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Home;
