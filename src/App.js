import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import {useEffect, useState} from 'react';

// import AjaxTest from './pages/AjaxTest';
import AbList from './pages/ab-list';
import Tmp from './pages/Tmp';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {

   return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* <Route path="/" element={ <AjaxTest/> } /> */}
          <Route path="/list" element={ <AbList /> } />
          <Route path="/" element={ <AbList /> } />
          <Route path="/tmp/:sid" element={ <Tmp /> } />
          <Route path="/tmp" element={ <Tmp /> } />
          <Route path="/login" element={ <Login /> } />
          
        </Routes>
      </BrowserRouter>
    </>

  );

  // const [listData, setListData] = useState({});

  // async function getList(){
  //   const r = await fetch('http://localhost:3001/ab/api');
  //   const result = await r.json();
  //   setListData(result);
  // }

  // useEffect(() => {
  //   console.log(2);
  //   getList();
  // }, []);
  // console.log(1);
  // return (
  //     <pre>{ JSON.stringify(listData, null, 4) }</pre>
  // );
}

export default App;
