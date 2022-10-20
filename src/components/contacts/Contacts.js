import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

function Contacts() {
  const contacts = useSelector((state) => state.contacts.allContacts);
  return (
    <table className="table shadow">
      <thead>
        <tr className="bg-danger text-white">
          <th>
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
            #
          </th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((item, index) => (
          <Contact item={item} index={index} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}

export default Contacts;
