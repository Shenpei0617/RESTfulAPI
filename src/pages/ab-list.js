
import {useEffect, useState} from 'react';
import {AB_LIST} from './../my-config';
import axios from 'axios';
import ListTable from '../components/ListTable';

function AbList() {
  const [listData, setListData] = useState({
    "totalRows": 0,
  "totalPages": 0,
  "perPage": 0,
  "page": 0,
  "rows":[],
  });

  async function getList(){
    const response = await axios.get(AB_LIST);
    console.log(response);
    setListData(response.data);
  }

  useEffect(() => {
    console.log(2);
    getList();
  }, []);
  console.log(1);
  return (
    //   <pre>{ JSON.stringify(listData, null, 4) }</pre>
    <div className="container">

    <ListTable rows={listData.rows}></ListTable>

  </div>
  );
}

export default AbList;