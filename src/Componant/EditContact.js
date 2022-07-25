import React, { useEffect, useState } from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { toast } from 'react-toastify';




const EditContact = () => {

     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [number, setNumber] = useState();
   const dispatch=useDispatch();
   const navigate=useNavigate();
   const {id}=useParams();
   const contacts = useSelector((state) => state);
   const curentContact=contacts.find(contact=>contact.id===parseInt(id))
     //  validation
    const checkEmail = contacts.find(
        (contact) => contact.email === email && email
    );

    const checkNumber = contacts.find(
        (contact) => contact.number === parseInt(number) && parseInt(number)
    );
    //  console.log('Number=', checkNumber);

    useEffect(() => {
      
      if(curentContact){
         setName(curentContact.name);
         setEmail(curentContact.email);
         setNumber(curentContact.number);
      }
    
      
    }, [curentContact])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !number) {
            return toast.warning('please fill the all fields!');
        }
      //   if (checkEmail) {
      //       console.log('email', checkEmail.email);
      //       return toast.error('This email already exists!');
      //   }
      //   if (checkNumber) {
      //       return toast.error('This number is already exists!');
      //   }
      //   let num = parseInt(number);
        const data = {
            id:parseInt(id),
            name,
            email,
            number,
        };
        dispatch({type:"UPDATE_CONTACT",payload:data});
        console.log("data=",data);
        toast.success("Update Sucessfully")
        navigate("/")
      }
    return (
        <>
            <div className="container">
                {curentContact ? (
                    <div className="row">
                        <h1 className=" fs-1 pt-5 pb-3 fw-bolder text-center">
                            Edit Student {id}
                        </h1>
                        <div className="col-md-6 shadow mx-auto py-5 px-0">
                            <form onSubmit={handleSubmit}>
                                <div className="from-group ">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="from-control w-75 py-2 border-0 shadow ps-2"
                                        value={name} onChange={(e)=>setName(e.target.value)}
                                    />
                                </div>
                                <div className="from-group">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="from-control my-2 w-75 py-2 border-0 shadow ps-2"

                                        value={email}   onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="from-group">
                                    <input
                                        type="number"
                                        placeholder="Ph number"
                                        className="from-control w-75 py-2 border-0 shadow ps-2"
                                        value={number} onChange={(e)=>setNumber(e.target.value)}
                                    />
                                </div>
                                <div className="from-group">
                                    <input
                                        type="submit"
                                        value="Update student"
                                        className="btn  btn-dark mt-3 px-4"
                                    />
                                    <Link
                                        to="/"
                                        className="btn  btn-danger mt-3 ms-3 px-5"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                  <>
                    <h1 className=" fs-1 pt-5 pb-3 fw-bolder text-center">
                        Student Contact with id {id} not exists
                    </h1>
                    <Link to="/" className='btn btn-primary'>Home</Link>
                    </>
                )}
            </div>
        </>
    );
};

export default EditContact;
