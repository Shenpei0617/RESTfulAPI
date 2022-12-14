
import {useContext, useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {AB_LIST} from './../my-config';
import axios from 'axios';
import ListTable from '../components/ListTable';
import Pagination from '../components/Pagination';
import AuthContext from '../contexts/AuthContext';

function AbListAuth() {
  const [listData, setListData] = useState({
    "totalRows": 0,
  "totalPages": 0,
  "perPage": 0,
  "page": 0,
  "rows":[],
  });
  const location = useLocation();
  const{myAuth}=useContext(AuthContext);
  const usp = new URLSearchParams(location.search);
  //console.log( usp.get('page'))

  async function getList(){
    if(!myAuth.authorised){
        return{
        "totalRows": 0,
        "totalPages": 0,
        "perPage": 0,
        "page": 0,
         "rows":[],
        }
    }

    const response = await axios.get(AB_LIST + `?` +usp.toString(),{headers:{
        Authorization:'Bearer'+myAuth.token
    }});
    console.log(response);
    setListData(response.data);
  }

  useEffect(() => {
    //console.log(2);
    getList();
  }, [location]);
  //console.log(1);
  return (
    //   <pre>{ JSON.stringify(listData, null, 4) }</pre>
    <div className="container">
    <div className="row">
        <div className='col'>
        <Pagination page={listData.page} totalPages={listData.totalPages} />
        </div>
    </div>  

    <ListTable rows={listData.rows}></ListTable>

  </div>
  );
}

export default AbListAuth;