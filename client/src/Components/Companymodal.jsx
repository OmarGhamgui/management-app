import {  Modal } from "react-bootstrap";
import { useState } from "react";
import React from "react";
// import { useDispatch } from "react-redux";
// import { addclient } from "../JS/actions";
import './Clientmodal.css'
const Companymodal = (props) => {
  // const dispatch = useDispatch();

  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const AddClient = (e) => {
  //   dispatch(
  //     addclient({
  //       firstName,
  //       lastName,
  //       fonction,
  //       company,
  //       email,
  //       phoneNumber,
  //     })
  //   ).then(    props.onHide()
  //     );
  // };
  return (
    <div className='modalclient'>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="text-align-center contained-modal-title-vcenter">
            Ajouter une société
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="corpsmodalclient">
            <div className="col-md-10 offset-md-1">
              <div className="header1 row pt-5">
                <h1>Veuillez remplir les champs au dessous</h1>
              </div>
              <div className="row mt-2">
                <input
                  type="text"
                  name="name"
                  style={{ width: "100%" }}
                  placeholder="Nom de l'entreprise"
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="row mt-2">
                <input
                  type="text"
                  name="name"
                  style={{ width: "100%" }}
                  placeholder="Type"
                  onChange={(e) => setCompanyType(e.target.value)}
                />
              </div>
              
             
              <div className="row mt-2">
                <input
                  type="email"
                  style={{ width: "100%" }}
                  name="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="row mt-2">
                <input
                  style={{ width: "100%" }}
                  type="phoneNumber"
                  name="phoneNumber"
                  placeholder="Numéro de téléphone"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="row mt-2 pb-5 pt-3">
                <button
                  type="submit"
                  className="d-flex mx-auto btn btn-newbtn"
                  // onClick={AddClient}
                >
                  Ajouter{" "}
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default Companymodal;
