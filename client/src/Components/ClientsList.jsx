import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ClientsList.css";
import { removeClient } from "../JS/actions";
const ClientsList = () => {
  const dispatch = useDispatch()
  const [clientList, setClientList] = useState([]);
  const userId = useSelector((state) => state.userReducer.user._id);
  useEffect(() => {
    axios.get(`/client/${userId}`).then((res) => {
      console.log("clientList", res.data.client);
      setClientList(res.data.client);
    });
  }, [clientList]);

  

  return (
    <div className="clientlist">
      <h3>Tableau des clients</h3>

      <table className="clientliste">
        <tr className="sondageRow">
          <th className="sondageCol">Nom</th>
          <th className="sondageCol">Fonction</th>
          <th className="sondageCol">Entreprise</th>
          <th className="sondageCol">Email</th>
          <th className="sondageCol">Téléphone</th>
          <th className="sondageCol"></th>
          <th className="sondageCol"></th>
        </tr>
        {clientList &&
          clientList.map((el, i) => (
            <tr className="sondageRow" key={i}>
              <th className="sondageTableContent">
                {el.lastName +' ' + el.firstName}
              </th>
              <th className="sondageTableContent">{el.fonction}</th>
              <th className="sondageTableContent">{el.company}</th>
              <th className="sondageTableContent">{el.email}</th>
              <th className="sondageTableContent">{el.phoneNumber}</th>

              <th className="sondageTableContent">
                <div className="sondageModifierBtn sondageModifierContent sondageMargin">
                  Modifier
                </div>
              </th>
              <th className="sondageTableContent">
                <div className="sondageSuppBtn sondageSuppContent sondageMargin" onClick={()=>dispatch(removeClient(el))} >
                  Supprimer
                </div>
              </th>
            </tr>
          ))}
      </table>

     
    </div>
  );
};

export default ClientsList;
