import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAContact, updateContact } from "../../redux/actions/contactAction";

const EditContact = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let contact = useSelector((state) => state.contacts.currentContact);

  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");

  const editContact = (e) => {
    e.preventDefault();
    contact = Object.assign(contact, {
      name: Name,
      phone: Phone,
      email: Email,
    });
    dispatch(updateContact(contact));
    navigate("/");
  };

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
      dispatch(getAContact(id));
  }, [contact]);

  return (
    <div className="card shadow border-o">
      <div className="card-header">Edit Contact</div>
      <div className="card-body">
        <form action="" onSubmit={(e) => editContact(e)}>
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
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
