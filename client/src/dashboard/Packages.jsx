import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideNavbar from "./SideNavbar";
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";

import {
  setPackage,
  getPackages,
  deletePackage,
  updatePackage,
} from "../actions/packageActions";
const Packages = () => {
  const dispatch = useDispatch();


  const [inputField, setInputField] = useState({
    package: "",
    duration: "",
    fee: "",
    registration: "",
    total: "",
  });
  const [message, setMessage] = useState(null);

  const allPackages = useSelector((state) => state.allPackages);
  const { packages } = allPackages;

  const pkgCreate = useSelector((state) => state.packageCreate);
  const createmsg = pkgCreate.success;

  const pkgupdate= useSelector((state) => state.packageUpdate);
  const updatemsg = pkgupdate.success;

  const pkgdelete= useSelector((state) => state.packageDelete);
  const deletemsg=pkgdelete.success


  useEffect(() => {
    dispatch(getPackages());
    // console.log(".............success")
  }, [dispatch,updatemsg,deletemsg,createmsg]);

  // ----------------------inputs onchange handler--------------------------------
  const changeHandler = (name, value) => {
    setInputField({ ...inputField, [name]: value });
    // console.log(inputField, "inputs data");
  };

  const OpenAddPackage = () => {
    const form = document.querySelector(".packages_Add_After");
    form.classList.remove("d-none");
    
     var div=document.querySelectorAll(".packages_Edit_After")
     var btn=document.querySelectorAll(".btn-link")
    for(let i=0;i<div.length;i++){
      div[i].classList.remove("show")
      btn[i].classList.add("collapsed")
      btn[i].setAttribute("aria-expanded",false)
    }
    
  };     

  const OpenEditPackage = (e, obj) => {
    setInputField(obj);
    const form = document.querySelector(".packages_Add_After");
    form.classList.add("d-none");
    // console.log(inputField, "......");
  };

  // -----------------create new package-----------------------------
  const SavePackage = () => {
    if (
      inputField.package == "" ||
      inputField.duration == "" ||
      inputField.fee == "" ||
      inputField.registration == "" ||
      inputField.total == ""
    ) {
      setMessage("Please fill all the fields");
      alert("Please fill all the fields");
    } else {
      dispatch(setPackage(inputField));
    }
    const form = document.querySelector(".packages_Add_After");
    form.classList.add("d-none");
  
  };
  // -----------------update package-----------------------------
  const UpdatePackage = (e, id) => {
      dispatch(updatePackage(inputField, id));
  };
  // -----------------delete package-----------------------------
  const packageDelete = (id) => {
    dispatch(deletePackage(id));
    dispatch(getPackages());
  };
  return (
    <div>
      <SideNavbar />
      <div className="dashboard-content-page p-0" >
        <div className="card m-3">
          <div className="card-header">
            <h3 className="d-flex justify-content-between align-items-center">
              <span>Package Plans</span>{" "}
              <i className="add-icon mt-2" onClick={OpenAddPackage}>
                <AiOutlinePlusCircle />
              </i>
            </h3>
          </div>
          <div className="card-block table-border-style ">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Fee</th>
                    <th scope="col">Registration Fee</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Total Fee</th>
                    <th colSpan={1} scope="col">
                      Edit
                    </th>
                    <th colSpan={1} scope="col">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody id="accordion">
                  <tr className="packages_Add_After d-none">
                    <th className="read-text">
                      <input
                        type="text"
                        placeholder="package"
                        name="package"
                        value={inputField.package}
                        onChange={(e) =>
                          changeHandler(e.target.name, e.target.value)
                        }
                      />
                    </th>
                    <td className="read-text">
                      <input
                        type="number"
                        placeholder="fee"
                        name="fee"
                        value={inputField.fee}
                        onChange={(e) =>
                          changeHandler(e.target.name, e.target.value)
                        }
                      />
                    </td>
                    <td className="read-text">
                      <input
                        type="number"
                        placeholder="registration fee"
                        name="registration"
                        value={inputField.registration}
                        onChange={(e) =>
                          changeHandler(e.target.name, e.target.value)
                        }
                      />
                    </td>
                    <td className="read-text">
                      <input
                        type="text"
                        placeholder="duration"
                        name="duration"
                        value={inputField.duration}
                        onChange={(e) =>
                          changeHandler(e.target.name, e.target.value)
                        }
                      />
                    </td>
                    <td className="read-text">
                      <input
                        type="number"
                        placeholder="total fee"
                        name="total"
                        value={inputField.total}
                        onChange={(e) =>
                          changeHandler(e.target.name, e.target.value)
                        }
                      />
                    </td>
                    <td colSpan={2}>
                      <button className="btn btn-brown" onClick={SavePackage}>
                        Save Package
                      </button>
                    </td>
                  </tr>

                  {packages &&
                    packages?.map((obj, i) => {
                      return (
                        <>
                          <tr
                            className="tr packages_Edit"
                            index={i}
                          >
                            <th className="read-text package-name">
                              {obj.package}
                            </th>
                            <td className="read-text">{obj.fee}</td>
                            <td className="read-text">{obj.registration}</td>
                            <td className="read-text">{obj.duration}</td>
                            <td className="read-text">{obj.total}</td>
                            <td
                              colSpan={1}
                              className="edit-icons text-center btn btn-link collapsed"
                              id={"headingOne_" + i}
                              data-toggle="collapse"
                              data-target={"#collapseOne_" + i}
                              aria-expanded="false"
                              aria-controls={"collapseOne_" + i}
                              onClick={(e) => {
                                OpenEditPackage(e, obj);
                              }}
                            >
                              <AiFillEdit />
                            </td>
                            <td
                              colSpan={1}
                              className="delete-icons text-center"
                              onClick={() => {
                                packageDelete(obj.id);
                              }}
                            >
                              <AiFillDelete />
                            </td>
                            {/* ----------------- */}
                            <tr
                              className="collapse packages_Edit_After"
                              id={"collapseOne_" + i}
                              aria-labelledby={"headingOne_" + i}
                              data-parent="#accordion"
                            >
                              <th className="read-text">
                                <input
                                  type="text"
                                  placeholder="package"
                                  name="package"
                                  value={inputField.package}
                                  onChange={(e) =>
                                    changeHandler(e.target.name, e.target.value)
                                  }
                                />
                              </th>
                              <td className="read-text">
                                <input
                                  type="text"
                                  placeholder="fee"
                                  name="fee"
                                  value={inputField.fee}
                                  onChange={(e) =>
                                    changeHandler(e.target.name, e.target.value)
                                  }
                                />
                              </td>
                              <td className="read-text">
                                <input
                                  type="text"
                                  placeholder="registration fee"
                                  name="registration"
                                  value={inputField.registration}
                                  onChange={(e) =>
                                    changeHandler(e.target.name, e.target.value)
                                  }
                                />
                              </td>
                              <td className="read-text">
                                <input
                                  type="text"
                                  placeholder="duration"
                                  name="duration"
                                  value={inputField.duration}
                                  onChange={(e) =>
                                    changeHandler(e.target.name, e.target.value)
                                  }
                                />
                              </td>
                              <td className="read-text">
                                <input
                                  type="text"
                                  placeholder="total fee"
                                  name="total"
                                  value={inputField.total}
                                  onChange={(e) =>
                                    changeHandler(e.target.name, e.target.value)
                                  }
                                />
                              </td>
                              <td colSpan={2}>
                                <button
                                  className="btn btn-brown"
                                  onClick={(e) => {
                                    UpdatePackage(e, obj.id);
                                  }}
                                >
                                  Update Package
                                </button>
                              </td>
                            </tr>
                          </tr>
                        </>
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

export default Packages;
