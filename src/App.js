import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space} from 'antd'

import { NavBar, Exchanges, Homepage, Cryptocurrencies, Cryptodetails, News } from './components/index.js';
import './App.css'

const App = () => {
    return (
        <div className="app">
            <div className="navBar">
                <NavBar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            {/* Route only trigger if go to this exact path*/}
                            <Route exact path="/" element={<Homepage />} />
                            <Route exact path="/exchanges" element={<Exchanges />} />
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}/>
                            <Route exact path="/crypto/:coinId" element={<Cryptodetails />}/>
                            <Route exact path="/news" element={<News /> }/>
                        </Routes>
                    </div>
                </Layout>
                <div className="footer" >
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse<br/>
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}
 
export default App;