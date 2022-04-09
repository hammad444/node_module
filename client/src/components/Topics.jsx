import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
getTopics
} from "../actions/otherDataActions";

const Topics = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopics());
  }, []);

  const topics = useSelector((state) => state.topics);
  const list = topics.list;

  return (
    <div className="topics">
       {list?.length > 0 ? (
        <div className="card">
          <div className="card-block table-border-style">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th className="w-0">#</th>
                    <th>Topic Name</th>
                  </tr>
                </thead>
                <tbody>
                {list &&
                    list?.map((obj, index) => {
                      return (
                        <tr>
                          <th className="col-1">{index + 1}</th>
                          <td className="topic-name" onClick={()=>{props.action(obj.Topics)}}>{obj.Topics}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>):null}
      </div>
  );
};

export default Topics;
