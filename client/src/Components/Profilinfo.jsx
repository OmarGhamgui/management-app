import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profilinfo.css";
import { editprofil } from "../JS/actions";
import {  useHistory } from "react-router-dom";

const Profilinfo = () => {
  const info = useSelector((state) => state.userReducer.user);
  const userId = useSelector(state=>state.userReducer.user._id)
  const token=useSelector(state=>state.userReducer.token)
  const [name, setName] = useState(info.name);
  const [email, setEmail] = useState(info.email);
  const [phoneNumber, setPhoneNumber] = useState(info.phoneNumber);
  const dispatch = useDispatch();  
  const history = useHistory();

  const editProfil =  () => {
       dispatch(
      editprofil(
        {name:name,
        email:email,
        phoneNumber:phoneNumber,
        userId:userId}
      )
    );
    history.push("/")

  };
  return (
    <div className="corps">
      <div className="row mt-3 mx-auto">
        <h5>
          Nom et Prénom :<h6>{info.name}</h6>
        </h5>{" "}
        <input
          type="text"
          placeholder="Nom et Prénom"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="row mt-3 mx-auto">
        {" "}
        <h5>
          Email : <h6>{info.email}</h6>{" "}
        </h5>{" "}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>{" "}
      <div className="row mt-3 mx-auto">
        {" "}
        <h5>
          Téléphone : <h6> {info.phone}</h6>{" "}
        </h5>
        <input
          type="text"
          placeholder="Téléphone"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="row mt-3 mx-auto">
        <button onClick={editProfil}>Modifier</button>
      </div>
    </div>
  );
};
export default Profilinfo;
