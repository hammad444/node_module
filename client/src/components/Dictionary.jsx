import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDictionary, getDictionaries } from "../actions/otherDataActions";
import Alphabets from "./Alphabets";
import SideNavbar from "./SideNavbar";

const Dictionary = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDictionaries());
  }, []);

  const dictionary = useSelector((state) => state.dictionary);
  const list = dictionary.list;

  const getWord = (letter) => {
    dispatch(getDictionary(letter));
  };

  return (
    <div>
      <SideNavbar />
      <div className="dictionary">
        {/* ---------------page-header--------------- */}

        <div className="pages-header">
          <div className="row align-items-center">
            <div className="page-header-title">
              <h2>Dictionary</h2>
            </div>
          </div>
        </div>
        {/* ---------------page-content--------------- */}
        <div className="m-3 pages-content">
          <div className="card mt-3 mb-1">
            <div className="card-header alphabets-header">
              <Alphabets action={getWord} />
            </div>
            </div>
            {list && list?.length <= 1 ? (
              <strong className="result_length">
                Citations Result : {list.length} item found
              </strong>
            ) : list && list?.length > 1 ? (
              <strong className="result_length">
                Citations Result : {list.length} items found
              </strong>
            ) : null}
            {list && list?.length > 0 ? (
                                        <div className="card mt-1">
              <div className="card-block table-border-style mt-1">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="col-1">#</th>
                        <th className="col-2">Words</th>
                        <th>Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list &&
                        list?.map((obj,index) => {
                          return (
                            <tr>
                              <th className="col-1">{index+1}</th>
                              <th className="col-2">{obj.Words}</th>
                              <td>
                                <a>{obj.Meaning}</a>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
              </div>
            ) : null}
        </div>
      </div>
      ;
    </div>
  );
};

export default Dictionary;
