import React, { useState } from "react";
import { Modal, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import "./Navigation.css";
import { deleteAccount, logout } from "../JS/actions";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.token);
  const loading = useSelector((state) => state.userReducer.loading);
  const id = useSelector((state) => state.userReducer.user._id);

  const history = useHistory();

  const logoutUser = async () => {
    try {
      await dispatch(logout({}));
      history.push("/login");
    } catch (error) {}
  };
  const deleteUser = async () => {
    try {
      await dispatch(deleteAccount(id,isAuth));
      history.push("/");
      setSmShow(false)
    } catch (error) {}
  };
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      {isAuth ? (
        <div >
          <Modal
          // style={{position:"absolute"}}
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title  id="example-modal-sizes-title-sm">
Confirmer ?          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex mx-auto justify-content-center">
<button onClick={deleteUser} className="mr-5">Oui
</button>
<button onClick={()=>setSmShow(false)}>Non</button></div>

        </Modal.Body>
      </Modal>
          <Navbar className="first-nav" expand="lg">
            <Nav>
              <a href="/" className="nav-links">
                La gestion commerciale simple, puissante et rapide
              </a>
            </Nav>
            <div className="d-flex space-around">
             <Link  to='/profile/info'> <button className="mx-4 btn btn-newbtn" >
                Modifier mes infos
              </button></Link> 
              <button className="mx-4 btn btn-newbtn"  onClick={() => setSmShow(true)}>
                Effacer mon compte{" "}
              </button>
              <button className="mx-4 btn btn-newbtn" onClick={logoutUser}>
                Déconnexion
              </button>
            </div>
          </Navbar>
          <Navbar expand="lg" className="second-navbar">
            <Nav className="mr-auto second-navbar-elements">
              <Link to="/profile">
                {" "}
                <button href="/">DASHBOARD </button>
              </Link>
              <button href="/">SOCIETES </button>
              <Link to="/profile/clients">
                {" "}
                <button>CLIENTS </button>{" "}
              </Link>
              <button href="/">CHIFFRES D'AFFAIRES </button>
            </Nav>
          </Navbar>
        </div>
      ) : (
        <div>
          <Navbar expand="lg" className="first-nav">
            <Nav>
              <a className="nav-links" href="/">
                La gestion commerciale simple, puissante et rapide
              </a>
            </Nav>
            <div className="d-flex">
              <Link to="/register">
                <button className="btn btn-newbtn">Inscription</button>
              </Link>
              <Link to="/login">
                <button className="mx-4 btn btn-newbtn">Connexion</button>
              </Link>{" "}
            </div>
          </Navbar>
        </div>
      )}
    </>
  );
};

export default Navigation;
