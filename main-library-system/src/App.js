import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Login from './pages/Login';
import Main from './pages/Main';
import useAuth from './hooks/useAuth';
import { getRoutes } from './data/RoleRoutes';
import React from 'react';
import Loading from './pages/Loading';
import CatchRandom from './components/CatchRandom';

function App() {

  const {auth} = useAuth();
  const routes = getRoutes(auth?.user?.role);


  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />}/>



          <Route  element={<RequireAuth pathName={'/'}/>}>
            <Route path='/' element={<Main />} >
              {
                
                  routes.map((item,index) => {
                    return (
                      <>
                       <Route  element={<RequireAuth pathName={item.path}/>}>
                          {index === 0 ? <Route index element={< item.component />}/> : <></>}
                      
                          <Route path={item.path} element={
                            <React.Suspense fallback={<Loading />}>{<item.component/>}</React.Suspense>}>
                              {
                                item.subComponents.map((item,index) => {
                                    return(
                                    <>
                                      {index === 0 ? <Route index element={< item.component />}/> : <></>}
                                      <Route  path={item.path} element={
                                        <React.Suspense fallback={<Loading/>}>
                                          {<item.component />}
                                        </React.Suspense>
                                      } />
                                    </>
                                    ) 
                                })
                              }
                            </Route>
                        </Route>
                      </>
                    )
                  })
                
              }
            </Route>

          </Route>
          
          <Route path='*' element={<CatchRandom />}/>

        </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
