import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete, AiFillCaretDown,AiOutlineSearch,AiOutlineDownload } from "react-icons/ai";
import avatar from "../images/avatar.png";

import SideNavbar from "./SideNavbar";
import { getUsers, deleteUser,searchUser,downloadUsers} from "../actions/userActions";
import UserForm from "./UserForm";


const Users = () => {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.allUsers);
  const {users } = allUsers;

  const usrupdate= useSelector((state) => state.userUpdate);
  const updatemsg = usrupdate.success;

  const usrDelete = useSelector((state) => state.userDelete);
  const deletemsg = usrDelete.success;

  const [inputField, setInputField] = useState({contact:"",name:""});

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch,deletemsg,updatemsg]);

  // -----------------delete user-----------------------------
  const userDelete = (id) => {
    dispatch(deleteUser(id));
    dispatch(getUsers());
  };
  // ----------------------inputs onchange handler--------------------------------
  const changeHandler = (name, value) => {
      setInputField({ ...inputField, [name]: value });
    // console.log(inputField, "inputs data ");
    
  };
  // -----------------update User-----------------------------
  const searchUsers = () => {
    // console.log(inputField)
      dispatch(searchUser(inputField));
  };
    // -----------------download User-----------------------------
    const downloadUser = () => {
        dispatch(downloadUsers(inputField));
    };
  return (
    <div>
      <SideNavbar />
      <div className="dashboard-content-page p-0">
        <div className="card m-3">
          <div className="user-header card-header">
            <h3><span>Users data</span></h3>
            <span className="search-user">
              <input name="name" placeholder="Search by Name" 
              onChange={(e) => changeHandler(e.target.name, e.target.value)}/>
                            <input name="contact" placeholder="Search by Contact" 
              onChange={(e) => changeHandler(e.target.name, e.target.value)}/>
              <label onClick={searchUsers}><AiOutlineSearch/></label>
              <button className="download-btn ml-3" onClick={downloadUser}>Download Users <i><AiOutlineDownload/></i></button>
              </span>
          </div>
          <div className="card-block table-border-style">
            <div className="table-responsive" style={{ height: "70vh" }}>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">View</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Mac address</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody id="accordion" style={{ overflow: "scroll" }}>
                  {users &&
                    users.map((obj, i) => {
                      return (
                        <tr className="tr user_Details_View" index={i}>
                          <td
                            id={"headingOne_" + i}
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target={"#collapseOne_" + i}
                            aria-expanded="false"
                            aria-controls={"collapseOne_" + i}
                          >
                            <AiFillCaretDown />
                          </td>
                          <th scope="row" className="read-text">
                            {obj.firstName}
                          </th>
                          <td>{obj.lastName}</td>
                          <td>{obj.email}</td>
                          <td>{obj.contact}</td>
                          <td>{obj.macAddress.macAddress1}</td>
                          <td
                              id={"headingTwo_" + i}
                              class="edit-payment-btn btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target={"#collapseTwo_" + i}
                              aria-expanded="false"
                              aria-controls={"collapseTwo_" + i}
                            >
                              <AiFillEdit />
                            </td>
                          <td
                            className="delete-icons"
                            onClick={() => {
                              userDelete(obj.id);
                            }}
                          >
                            <AiFillDelete />
                          </td>
              {/* ---------user deatils start------------------- */}
                          <div
                            id={"collapseOne_" + i}
                            aria-labelledby={"headingOne_" + i}
                            data-parent="#accordion"
                            className="collapse card user_Details_After p-3"
                          >
                            <div className="users-account-details d-flex">
                              <div className=" account-item">
                                <h5>Account Details</h5>
                                <br />
                                <p>
                                  <b>Criteria: </b> {obj.criteria}
                                </p>
                                <p>
                                  <b>First Name: </b> {obj.firstName}
                                </p>
                                <p>
                                  <b>Last Name: </b> {obj.lastName}
                                </p>
                                <p>
                                  <b>Email: </b> {obj.email}
                                </p>
                              </div>
                              <div className="account-item">
                                <p>
                                  <b>Contact: </b>
                                  {obj.contact}
                                </p>
                                <p>
                                  <b>Address: </b> {obj.address}
                                </p>
                                <p>
                                  <b>City: </b> {obj.city}
                                </p>
                                <p>
                                  <b>Speciality: </b> {obj.speciality}
                                </p>
                                <p>
                                  <b>macAddress 1: </b> {obj.macAddress.macAddress1}
                                </p>
                                <p>
                                  <b>macAddress 2: </b> {obj.macAddress.macAddress1}
                                </p>
                              </div>
                              <div className="">
                                <div className="user-picture mt-2">
                                  <img src={obj.picture===0?avatar:obj.picture} alt=""/>
                                </div>
                              </div>
                            </div>
                          </div>
                            {/* ---------user form start------------------- */}
                            <div
                              className="collapse card payment_Details_After p-3"
                                id={"collapseTwo_" + i}
                                aria-labelledby={"headingTwo_" + i}
                                data-parent="#accordion"
                              >
                               <UserForm obj={obj} id={obj.id}/>
                              </div>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Users;
