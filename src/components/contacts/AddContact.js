import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";
import { addContact } from "../../redux/actions/contactAction";

const AddContact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");

  const createContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name: Name,
      phone: Phone,
      email: Email,
    };
    dispatch(addContact(new_contact));
    return navigate("/");
  };
  return (
    <div className="card shadow border-o">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form action="" onSubmit={(e) => createContact(e)}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary " type="submit">
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
