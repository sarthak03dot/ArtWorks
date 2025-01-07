import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArtworkGenerator from './components/ArtworkGenerator';
import ArtworkGallery from './components/ArtGallery';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<ArtworkGenerator />} />
            <Route path="/gallery" element={<ArtworkGallery />} />
        </Routes>
    </Router>
);

export default App;
