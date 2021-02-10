import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import { Card, CardDeck} from "react-bootstrap";
import Companymodal from "./Companymodal";
import Clientmodal from "./Clientmodal";
const Profile = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);

  const userData = useSelector((state) => state.userReducer.user);
  return (
    <>
      <>
      <Clientmodal
          show={modalShow1}
          onHide={() => setModalShow1(false)}
        />
        <Companymodal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
       
        <div className="content">
          <h4>{userData.name} Dashboard:</h4>

          <CardDeck className="cards-container">
            <Card onClick={() => setModalShow(true)} className="card-content">
              <i class="fas fa-plus-circle fa-7x"></i>

              <Card.Body>
                <div className="d-flex mx-auto justify-content-center">
                  <h1>Ajouter une société</h1>
                </div>
              </Card.Body>
            </Card>
            <Card onClick={() => setModalShow1(true)} className="card-content">
              <i class="fas fa-plus-circle fa-7x"></i>

              <Card.Body>
                <div className="d-flex mx-auto justify-content-center">
                  <h1>Ajouter un client</h1>
                </div>
              </Card.Body>
            </Card>{" "}
            <Card className="card-content">
              <i class="fas fa-plus-circle fa-7x"></i>

              <Card.Body>
                <div className="d-flex mx-auto justify-content-center">
                  <h1>Créez un devis</h1>
                </div>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </>
    </>
  );
};

export default Profile;
