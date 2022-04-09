import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLegalterm,
  getArticles,
  searchArticle,
} from "../actions/otherDataActions";

import PopupModel from "./PopupModel";

import {AiOutlineSearch } from "react-icons/ai";

const ArticlesTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  const articles = useSelector((state) => state.articles);
  const list = articles.list;
  
  const [articleText, setArticleText]=useState('')
  const [Title, setTitle]=useState('')

  const readArticle=(text,title)=>{
    var modal = document.querySelector(".article-modal_");
    modal.style.display = "block";
    setArticleText(text) 
    setTitle(title) 
  }


  const closePopup = (id) => {
    var modal = document.querySelector(".article-modal_");
    modal.style.display = "none";
  };

  const [searchText,setSearchText]=useState("")
  const changeHandler=(value)=>{
    setSearchText(value)
  }
  const searchArticles=()=>{
    dispatch(searchArticle(searchText))
  }

  return (
    <div className="article-table">
                        <div className="card my-1">
            <div className="card-header search-header">
       <span><i><AiOutlineSearch/></i> <input type="search" onChange={(e)=>{changeHandler(e.target.value)}}name="" id="" /></span>
       <button className="btn btn-brown ml-3" onClick={searchArticles}>Search</button>
            </div>
          </div>

      {list && list?.length <= 1 ? (
        <strong className="result_length">
          Legal Terms Result : {list.length} item found
        </strong>
      ) : list && list?.length > 1 ? (
        <strong className="result_length">
          Legal Terms Result : {list.length} items found
        </strong>
      ) : null}

      {list?.length > 0 ? (
        <div className="card mt-1">
          <div class="card-block table-border-style p-1">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr className="">
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Category</th>
                    <th scope="col">Year</th>
                    <th scope="col">Read</th>
                  </tr>
                </thead>
                <tbody>
                  {list &&
                    list?.map((obj, index) => {
                      return (
                        <tr>
                          <th>{index + 1}</th>
                          <td>{obj.Title}</td>
                          <td>{obj.Author}</td>
                          <td>{obj.Category}</td>
                          <td>{obj.Year}</td>
                          <td scope="row" className="read-text" onClick={()=>{readArticle(obj.Article_text,obj.Title)}}>
                      Read
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
          <div className="modal article-modal_">
        <PopupModel
          title={Title && Title}
          desc={articleText && articleText}
          closePopup={() => {
            closePopup();
          }}
        />
      </div>
    </div>
  );
};

export default ArticlesTable;
