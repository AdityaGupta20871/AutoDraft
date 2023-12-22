import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Generate from './components/Generate';
import Profile from './components/Profile';
import { loadData } from './utils/localStorage';

function App() {
  const [resume,setResume] = useState('cbk');
  const [openAIkey,setOpenAIkey] = useState('bc');
  useEffect(()=>{
    const fetchLocalData = async () =>{
      const fetchResume = await loadData('resume')
      const fetchkey = await loadData('openAIkey')
      setResume(fetchResume)
      setOpenAIkey(fetchkey)
    } 
    fetchLocalData();
  },[])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile resume={resume} 
        setResume={setResume}
        openAIkey={openAIkey}
        setOpenAIkey={setOpenAIkey} />}  />
        <Route path="/generate" element={<Generate />} />
      </Routes>
    </Router>
  );
}

export default App;
