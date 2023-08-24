import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./components/homepage";
import React from "react";
return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/login" exact element={<Homepage/>}/>
        
            
        
        </Routes>
        </BrowserRouter>
);
export default App;