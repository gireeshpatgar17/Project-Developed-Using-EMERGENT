import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { 
  Header, 
  Sidebar, 
  YouTubeHome, 
  VideoPlayer,
  mockVideos 
} from './Components';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('youtube-dark-mode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Save theme preference to localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('youtube-dark-mode', JSON.stringify(newDarkMode));
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleBackToHome = () => {
    setSelectedVideo(null);
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedVideo(null); // Go back to home when searching
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <BrowserRouter>
          <Header 
            onSearch={handleSearch}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <Sidebar 
            isCollapsed={sidebarCollapsed}
            darkMode={darkMode}
          />
          
          <main className="transition-all duration-300">
            <Routes>
              <Route 
                path="/" 
                element={
                  selectedVideo ? (
                    <VideoPlayer 
                      video={selectedVideo}
                      onBack={handleBackToHome}
                      darkMode={darkMode}
                    />
                  ) : (
                    <YouTubeHome 
                      videos={mockVideos}
                      onVideoClick={handleVideoClick}
                      searchQuery={searchQuery}
                      darkMode={darkMode}
                    />
                  )
                } 
              />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
