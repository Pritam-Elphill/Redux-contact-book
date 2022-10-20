import React from "react";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../redux/actions/contactAction";

const Contact = ({ item, index }) => {
  const dispatch = useDispatch();
  return (
    <tr className="shadow-sm" key={index}>
      <td>
        {/**
          <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
          </div>
        */}
        {index+1}
      </td>
      <td>
        <Avatar name={item.name} round={true} size={45} className="me-3" />
        {item.name}
      </td>
      <td>{item.phone}</td>
      <td>{item.email}</td>
      <td className="actions">
        <Link to={`/contact/edit/${item.id}`}>
          <span className="material-icons">edit</span>
        </Link>
        <button
          className="btn btn-light"
          onClick={() => dispatch(deleteContact(item.id))}
        >
          <span className="material-icons text-danger">remove_circle</span>
        </button>
      </td>
    </tr>
  );
};

export default Contact;
