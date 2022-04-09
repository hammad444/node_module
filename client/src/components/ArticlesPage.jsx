import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topics from './Topics';
import SideNavbar from './SideNavbar';
import Alphabets from "./Alphabets";
import {getArticles,getArticle } from '../actions/otherDataActions';
import ArticlesTable from "./ArticlesTable";


const ArticlesPage = () => {
        const dispatch = useDispatch();
        
        const getAeticleByTitle=(letter)=>{
                dispatch(getArticle(letter));
              }

  return <div>
                  <SideNavbar/>
          <div className='articles-page'>
     {/* ---------------page-header--------------- */}
                          <div className="pages-header">
                          <div className="row align-items-center">
                                  <div className="page-header-title">
                                  <h2>Articles</h2>
                                  </div>
                          </div>
                  </div>
      {/* ---------------page-content--------------- */}
                  <div className="m-3 pages-content">
                  <div className="card mb-1">
            <div className="card-header alphabets-header">
              <Alphabets action={getAeticleByTitle}/>
            </div>
          </div>
          <ArticlesTable/>
          </div>
  </div>;
  </div>
};

export default ArticlesPage;
