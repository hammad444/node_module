import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Topics from './Topics';
import SideNavbar from './SideNavbar';

import AlphabetStatutes from './AlphabetStatutes';
import StatutesTable from './StatutesTable';
import TopicDetails from './TopicDetail';

import {
  topicStatutes
  } from "../actions/otherDataActions";

const TopicsPage = () => {
  const dispatch = useDispatch();

  const topicStatute = useSelector((state) => state.topicStatute);
  const list = topicStatute.list;

  const getOrdinaceName=(topic)=>{
    dispatch(topicStatutes(topic))
    var toptable = document.querySelector(".topic-ordinance");
    toptable.style.display = "block";
    var alstatutes = document.querySelector(".topics");
    alstatutes.style.display = "none";
  }


  return <div>
    <SideNavbar/>
   <div className='topics-page'>
      {/* ---------------page-header--------------- */}

      <div className="pages-header">
        <div className="row align-items-center">
          <div className="page-header-title">
            <h2>Topics</h2>
          </div>
        </div>
      </div>
         {/* ---------------page-content--------------- */}
         <div className="m-3 pages-content">
        <Topics action={getOrdinaceName}/>
        <div className="topic-ordinance">
      <TopicDetails ordinance={list}/>
      </div>
      <StatutesTable />
     </div>
  </div>;
  </div>
};

export default TopicsPage;
