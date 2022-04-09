import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit } from "react-icons/ai";
import { getClients, getClient } from "../actions/dairyActions";

const ClientsTable = (props) => {
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.loginUser);
  const { userInfo } = loginUser;

  const clientsList = useSelector((state) => state.clientsList);
  const clients = clientsList.clients;

  const clientUpdate = useSelector((state) => state.clientUpdate);
  const clupdmsg = clientUpdate.success;

  const clientCreate = useSelector((state) => state.clientCreate);
  const clcreatemsg = clientCreate.success;

  useEffect(() => {
    dispatch(getClients(userInfo?.id));
    // console.log(new Date(Math.min(...props.count?.open?.map(e => new Date(e.hearing_date)))))
  }, []);

  useEffect(() => {
    if (clupdmsg) {
      dispatch(getClients(userInfo?.id));
    }
  }, [clupdmsg]);

  useEffect(() => {
    if (clcreatemsg) {
      dispatch(getClients(userInfo?.id));
    }
  }, [clcreatemsg]);

  // -----------------update package-----------------------------
  const UpdateClientForm = (user_id, client_id) => {
    dispatch(getClient({ user_id: user_id, client_id: client_id }));
    var clientscases = document.getElementsByClassName("clients-cases")[0];
    var clientuform = document.getElementsByClassName("client-uform")[0];
    clientscases.style.display = "none";
    clientuform.style.display = "block";
  };
  const openClientCases = (user_id, client_id) => {
    dispatch(getClient({ user_id: user_id, client_id: client_id }));
    var clientscases = document.getElementsByClassName("clients-cases")[0];
    var clientcase = document.getElementsByClassName("client-case")[0];
    clientcase.style.display = "block";
    clientscases.style.display = "none";
  };

  return (
    <div className="client-table card">
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Client Name</th>
              <th scope="col">Contact</th>
              <th scope="col">City</th>
              <th scope="col">Client From</th>
              <th scope="col">Open Cases</th>
              {/* <th scope="col">Next coming case</th> */}
              <th scope="col">Cases</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {clients &&
              clients.map((obj, index) => {
                return (
                  <tr className="tr">
                    <th>{index + 1}</th>
                    <th>{obj.client_name}</th>
                    <td>{obj.client_contact}</td>
                    <td>{obj.client_city}</td>
                    <td>{obj.client_from}</td>
                    <td className="text-center">
                      {
                        props.count?.open
                          .filter((cas) => cas.client_id == obj.client_id)
                          .map((item) => item.case_number)
                          .filter(
                            (value, index, self) =>
                              self.indexOf(value) === index
                          ).length
                      }
                    </td>
                    {/* pending */}
                    {/* <td>none</td> */}
                    {/* <td>
                      {
                        props.count?.open.filter(
                          (cas) => cas.client_id == obj.client_id
                        )
                      }
                    </td> */}
                    <td
                      onClick={() => {
                        openClientCases(obj.user_id, obj.client_id);
                      }}
                      className="btn-text"
                    >
                      Cases
                    </td>
                    <td
                      onClick={() => {
                        UpdateClientForm(obj.user_id, obj.client_id);
                      }}
                      className="btn-text"
                    >
                      <AiFillEdit />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientsTable;
