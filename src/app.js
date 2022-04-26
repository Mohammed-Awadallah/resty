import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';
export default function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequest] = useState({});
  const handleApiCall = async (requestParams) => {
    setRequest(requestParams);
    let methodCall = requestParams.method.toLowerCase();
    const response = await axios[methodCall](requestParams.url, (requestParams.body) ? (requestParams.body) : null);
  
    const result = {
      
      results: response.data
    };
   
    setData(result);
  }
  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={handleApiCall} />
      <Results data={data} 
        url={requestParams.url} method={requestParams.method} />
      <Footer />

    </React.Fragment>
  );
}

