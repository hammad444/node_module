import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideNavbar from "./SideNavbar";
import {
  AiOutlineDownload,
  AiOutlineUpload,
  AiOutlineCheck,
} from "react-icons/ai";
import {
  uploadCaseData,
  uploadStatuteData,
  uploadLegaltermData,
  uploadTopicData,
  uploadArticleData,
  uploadDictionaryData
} from "../actions/uploadActions";

const UploadData = () => {
  const dispatch = useDispatch();

  const [dataCase, setCaseData] = useState({ file: "" });
  const [dataStatute, setStatuteData] = useState({ file: "" });
  const [dataLegalterm, setLegaltermData] = useState({ file: "" });
  const [dataTopic, setTopicData] = useState({ file: "" });
  const [dataArticle, setArticleData] = useState({ file: "" });
  const [dataDictionary, setDictionaryData] = useState({ file: "" });

  const statutes = useSelector((state) => state.statutesData);
  const stmsg = statutes?.message;

  const cases = useSelector((state) => state.casesData);
  const camsg = cases?.message;

  const legalterms = useSelector((state) => state.legaltermsData);
  const ltmsg = legalterms?.message;

  const articles = useSelector((state) => state.articlesData);
  const armsg = articles?.message;

  const topics = useSelector((state) => state.topicsData);
  const tomsg = topics?.message;

  const dictionary = useSelector((state) => state.dictionaryData);
  const dimsg = dictionary?.message;

  const handleChangeStatute = (file) => {
    setStatuteData({ file: file });
    // console.log(dataStatute, "file............");
  };

  const uploadStatuteFile = () => {
    dispatch(uploadStatuteData(dataStatute));
  };
  const handleChangeCase = (file) => {
    setCaseData({ file: file });
    // console.log(dataCase, "file............");
  };
  const uploadCaseFile = () => {
    dispatch(uploadCaseData(dataCase));
  };
  const handleChangeLegalterm = (file) => {
    setLegaltermData({ file: file });
    // console.log(dataLegalterm, "file............");
  };
  const uploadLegaltermFile = () => {
    dispatch(uploadLegaltermData(dataLegalterm));
  };
  const handleChangeArticle = (file) => {
    setArticleData({ file: file });
    // console.log(dataArticle, "file............");
  };
  const uploadArticleFile = () => {
    dispatch(uploadArticleData(dataArticle));
  };
  const handleChangeTopic = (file) => {
    setTopicData({ file: file });
    // console.log(dataTopic, "file............");
  };
  const uploadTopicFile = () => {
    dispatch(uploadTopicData(dataTopic));
  };
  const handleChangeDictionary = (file) => {
    setDictionaryData({ file: file });
    // console.log(dataDictionary, "file............");
  };
  const uploadDictionaryFile = () => {
    dispatch(uploadDictionaryData(dataDictionary));
  };
  return (
    <div>
      <SideNavbar />
      <div className="dashboard-content-page p-2">
        <div className="card m-3">
          <div className="card-block table-border-style">
            <div className="table-responsive">
              <table className="data-upload table table-hover">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Upload</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Statutes Data</th>
                    <td className="upload">
                      <form>
                        <input
                          type="file"
                          className="upload-input"
                          name="uploadfile"
                          onChange={(e) => handleChangeStatute(e.target.files[0])}
                          accept="csv"
                        />
                        <button
                          type="button"
                          className="upload-btn"
                          onClick={uploadStatuteFile}
                        >
                          <i>
                            <AiOutlineUpload />
                          </i>
                        </button>
                      </form>
                    </td>
                    <td>
                      {stmsg && (
                        <span className="text-success">&nbsp;{stmsg}</span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Case_laws Data</th>
                    <td className="upload">
                      <form>
                        <input
                          type="file"
                          className="upload-input"
                          name="uploadfile"
                          onChange={(e) => handleChangeCase(e.target.files[0])}
                          accept="csv"
                        />
                        <button
                          type="button"
                          className="upload-btn"
                          onClick={uploadCaseFile}
                        >
                          <i>
                            <AiOutlineUpload />
                          </i>
                        </button>
                      </form>
                    </td>
                    <td>
                      {camsg && (
                        <span className="text-success">&nbsp;{camsg}</span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Legal_Terms Data</th>
                    <td className="upload">
                      <form>
                        <input
                          type="file"
                          className="upload-input"
                          name="uploadfile"
                          onChange={(e) => handleChangeLegalterm(e.target.files[0])}
                          accept="csv" 
                        />
                        <button type="button" 
                        className="upload-btn"
                        onClick={uploadLegaltermFile}>
                          <i>
                            <AiOutlineUpload />
                          </i>
                        </button>
                      </form>
                    </td>
                    <td>{ltmsg && <span className="text-success">&nbsp;{ltmsg}</span>}</td>
                  </tr>
                  <tr>
                    <th scope="row">Articles Data</th>
                    <td className="upload">
                      <form>
                        <input
                          type="file"
                          className="upload-input"
                          name="uploadfile"
                          onChange={(e) => handleChangeArticle(e.target.files[0])}
                          accept="csv"
                        />
                        <button type="button" 
                        className="upload-btn"
                        onClick={uploadArticleFile}
                        >
                          <i>
                            <AiOutlineUpload />
                          </i>
                        </button>
                      </form>
                    </td>
                    <td>{armsg && <span className="text-success">&nbsp;{armsg}</span>}</td>
                  </tr>
                  <tr>
                    <th scope="row">Topics Data</th>
                    <td className="upload">
                      <form>
                        <input
                          type="file"
                          className="upload-input"
                          name="uploadfile"
                          onChange={(e) => handleChangeTopic(e.target.files[0])}
                          accept="csv"
                        />
                        <button type="button" 
                        className="upload-btn" 
                        onClick={uploadTopicFile}
                        >
                          <i>
                            <AiOutlineUpload />
                          </i>
                        </button>
                      </form>
                    </td>
                    <td>{tomsg && <span className="text-success">&nbsp;{tomsg}</span>}</td>
                  </tr>
                  <tr>
                    <th scope="row">Dictionary Data</th>
                    <td className="upload">
                      <form>
                        <input
                          type="file"
                          className="upload-input"
                          name="uploadfile"
                          onChange={(e) => handleChangeDictionary(e.target.files[0])}
                          accept="csv"
                        />
                        <button type="button" 
                        className="upload-btn"
                        onClick={uploadDictionaryFile}
                        >
                          <i>
                            <AiOutlineUpload />
                          </i>
                        </button>
                      </form>
                    </td>
                    <td>{dimsg && <span className="text-success">&nbsp;{dimsg}</span>}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadData;
