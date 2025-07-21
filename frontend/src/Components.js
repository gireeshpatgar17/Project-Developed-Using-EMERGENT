import React, { useState, useEffect } from 'react';

// Mock data for videos
const mockVideos = [
  {
    id: 1,
    title: "Advanced React Tutorials - Complete Guide 2025",
    channel: "TechMaster",
    views: "2.3M",
    uploadTime: "3 days ago",
    duration: "15:24",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    channelAvatar: "https://images.unsplash.com/photo-1596300807208-eef2bb17b469?w=100&h=100&fit=crop&crop=face",
    description: "Learn advanced React concepts with hooks, context, and performance optimization.",
    likes: "45K",
    dislikes: "1.2K",
    subscribers: "890K"
  },
  {
    id: 2,
    title: "Gaming Setup Tour 2025 - Ultimate Battlestation",
    channel: "GameZone Pro",
    views: "1.8M",
    uploadTime: "1 week ago",
    duration: "12:15",
    thumbnail: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e",
    channelAvatar: "https://images.unsplash.com/photo-1504370164829-8c6ef0c41d06?w=100&h=100&fit=crop&crop=face",
    description: "Check out this insane gaming setup with RGB everything!",
    likes: "78K",
    dislikes: "2.1K",
    subscribers: "1.2M"
  },
  {
    id: 3,
    title: "Best Wireless Headphones 2025 Review",
    channel: "AudioExpert",
    views: "956K",
    uploadTime: "5 days ago",
    duration: "18:33",
    thumbnail: "https://images.unsplash.com/photo-1567928513899-997d98489fbd",
    channelAvatar: "https://images.unsplash.com/photo-1508898578281-774ac4893c0c?w=100&h=100&fit=crop&crop=face",
    description: "Comprehensive review of the top wireless headphones this year.",
    likes: "32K",
    dislikes: "890",
    subscribers: "654K"
  },
  {
    id: 4,
    title: "Amazing Dessert Recipes - Easy & Delicious",
    channel: "CookingMaster",
    views: "3.2M",
    uploadTime: "2 days ago",
    duration: "22:11",
    thumbnail: "https://images.unsplash.com/photo-1649768757981-45b683e4889c",
    channelAvatar: "https://images.unsplash.com/photo-1584293485045-3b38c835789c?w=100&h=100&fit=crop&crop=face",
    description: "Learn to make restaurant-quality desserts at home!",
    likes: "125K",
    dislikes: "3.2K",
    subscribers: "2.1M"
  },
  {
    id: 5,
    title: "Epic Desert Adventure - Sahara Travel Vlog",
    channel: "WanderlustTV",
    views: "1.4M",
    uploadTime: "1 week ago",
    duration: "25:47",
    thumbnail: "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49",
    channelAvatar: "https://images.unsplash.com/photo-1523568129082-a8d6c095638e?w=100&h=100&fit=crop&crop=face",
    description: "Join us on an incredible journey through the Sahara desert!",
    likes: "67K",
    dislikes: "1.8K",
    subscribers: "890K"
  },
  {
    id: 6,
    title: "Soccer Skills Training - Pro Tips & Tricks",
    channel: "SportsPro",
    views: "2.7M",
    uploadTime: "4 days ago",
    duration: "19:22",
    thumbnail: "https://images.unsplash.com/photo-1604292466471-e204b93276ce",
    channelAvatar: "https://images.unsplash.com/photo-1607417307259-afd87bdf92a5?w=100&h=100&fit=crop&crop=face",
    description: "Master these soccer skills with professional training techniques.",
    likes: "89K",
    dislikes: "2.5K",
    subscribers: "1.5M"
  },
  {
    id: 7,
    title: "iPhone 16 Pro Max - Complete Review & Tests",
    channel: "TechReviews",
    views: "4.1M",
    uploadTime: "6 days ago",
    duration: "28:15",
    thumbnail: "https://images.unsplash.com/photo-1579905052186-34a9f6f06071",
    channelAvatar: "https://images.unsplash.com/photo-1596300807208-eef2bb17b469?w=100&h=100&fit=crop&crop=face",
    description: "In-depth review of Apple's latest flagship smartphone.",
    likes: "156K",
    dislikes: "4.2K",
    subscribers: "3.2M"
  },
  {
    id: 8,
    title: "Luxury Resort Tour - Maldives Paradise",
    channel: "LuxuryTravel",
    views: "1.9M",
    uploadTime: "3 days ago",
    duration: "16:44",
    thumbnail: "https://images.unsplash.com/photo-1470214203634-e436a8848e23",
    channelAvatar: "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=100&h=100&fit=crop&crop=face",
    description: "Explore the most beautiful luxury resort in the Maldives.",
    likes: "72K",
    dislikes: "1.9K",
    subscribers: "1.1M"
  }
];

const mockComments = [
  {
    id: 1,
    author: "TechEnthusiast",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=face",
    text: "This is exactly what I was looking for! Great explanation.",
    likes: 245,
    time: "2 hours ago"
  },
  {
    id: 2,
    author: "CodeMaster",
    avatar: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=40&h=40&fit=crop&crop=face",
    text: "Amazing tutorial! Could you make one about advanced hooks?",
    likes: 128,
    time: "5 hours ago"
  },
  {
    id: 3,
    author: "DevLife",
    avatar: "https://images.unsplash.com/photo-1567928513899-997d98489fbd?w=40&h=40&fit=crop&crop=face",
    text: "Thanks for sharing this. Very helpful for my project.",
    likes: 89,
    time: "1 day ago"
  }
];

// Header Component
export const Header = ({ onSearch, darkMode, toggleDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      {/* Left section - Menu and Logo */}
      <div className="flex items-center space-x-4">
        <button className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800' : ''}`}>
          <svg className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center space-x-1">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <span className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-black'}`}>YouTube</span>
        </div>
      </div>

      {/* Center section - Search */}
      <div className="flex-1 max-w-2xl mx-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`flex-1 px-4 py-2 border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'} rounded-l-full focus:outline-none focus:border-blue-500`}
          />
          <button 
            onClick={() => onSearch(searchQuery)}
            className={`px-6 py-2 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border-l-0 border rounded-r-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-600' : ''}`}
          >
            <svg className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right section - Icons */}
      <div className="flex items-center space-x-2">
        <button 
          onClick={toggleDarkMode}
          className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800' : ''}`}
        >
          {darkMode ? (
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
            </svg>
          )}
        </button>
        <button className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800' : ''}`}>
          <svg className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
        <button className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800' : ''}`}>
          <svg className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17V3" />
          </svg>
        </button>
        <button className={`p-2 rounded-full hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800' : ''}`}>
          <svg className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5z" />
          </svg>
        </button>
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
          <span className="text-white text-sm font-medium">U</span>
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
export const Sidebar = ({ isCollapsed, darkMode }) => {
  const menuItems = [
    { icon: "🏠", label: "Home", active: true },
    { icon: "🎬", label: "Shorts" },
    { icon: "📺", label: "Subscriptions" },
    { icon: "📚", label: "Library" },
    { icon: "📜", label: "History" },
    { icon: "▶️", label: "Your videos" },
    { icon: "⏰", label: "Watch later" },
    { icon: "👍", label: "Liked videos" },
    { icon: "📝", label: "Playlists" }
  ];

  const exploreItems = [
    { icon: "🔥", label: "Trending" },
    { icon: "🎵", label: "Music" },
    { icon: "🎮", label: "Gaming" },
    { icon: "📰", label: "News" },
    { icon: "🏆", label: "Sports" },
    { icon: "💡", label: "Learning" }
  ];

  return (
    <aside className={`fixed left-0 top-16 h-full ${isCollapsed ? 'w-20' : 'w-60'} ${darkMode ? 'bg-gray-900' : 'bg-white'} border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300 z-40 overflow-y-auto`}>
      <div className="py-2">
        {/* Main Menu */}
        <div className="mb-4">
          {menuItems.map((item, index) => (
            <div key={index} className={`flex items-center px-3 py-2 mx-2 rounded-lg cursor-pointer transition-colors ${item.active ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
              <span className="text-xl mr-6">{item.icon}</span>
              {!isCollapsed && <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.label}</span>}
            </div>
          ))}
        </div>

        {!isCollapsed && (
          <>
            <hr className={`my-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
            
            {/* Explore */}
            <div className="mb-4">
              <div className={`px-5 py-2 text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Explore</div>
              {exploreItems.map((item, index) => (
                <div key={index} className={`flex items-center px-3 py-2 mx-2 rounded-lg cursor-pointer hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800' : ''} transition-colors`}>
                  <span className="text-xl mr-6">{item.icon}</span>
                  <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.label}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

// Video Card Component
export const VideoCard = ({ video, onVideoClick, darkMode }) => {
  return (
    <div 
      className="cursor-pointer group"
      onClick={() => onVideoClick(video)}
    >
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full aspect-video object-cover rounded-xl group-hover:rounded-none transition-all duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
          {video.duration}
        </div>
      </div>
      
      <div className="mt-3 flex">
        <img
          src={video.channelAvatar}
          alt={video.channel}
          className="w-9 h-9 rounded-full mr-3 flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className={`font-medium line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-colors`}>
            {video.title}
          </h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
            {video.channel}
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {video.views} views • {video.uploadTime}
          </p>
        </div>
        <button className={`ml-2 p-1 opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

// Video Player Component
export const VideoPlayer = ({ video, onBack, darkMode }) => {
  const [showComments, setShowComments] = useState(false);
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="flex">
        {/* Main content */}
        <div className="flex-1 px-6 py-4">
          <button 
            onClick={onBack}
            className={`mb-4 flex items-center space-x-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>

          {/* Video Player */}
          <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
            <iframe
              src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
              title={video.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Info */}
          <h1 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {video.title}
          </h1>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={video.channelAvatar}
                alt={video.channel}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {video.channel}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {video.subscribers} subscribers
                </p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors">
                Subscribe
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className={`flex items-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-full`}>
                <button className={`flex items-center space-x-2 px-4 py-2 rounded-l-full hover:bg-gray-200 ${darkMode ? 'hover:bg-gray-700 text-white' : ''} transition-colors`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>{video.likes}</span>
                </button>
                <button className={`flex items-center space-x-2 px-4 py-2 rounded-r-full hover:bg-gray-200 ${darkMode ? 'hover:bg-gray-700 text-white' : ''} transition-colors border-l ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13l3 3 7-7" />
                  </svg>
                  <span>{video.dislikes}</span>
                </button>
              </div>
              
              <button className={`flex items-center space-x-2 px-4 py-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200'} rounded-full transition-colors`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Description */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl p-4 mb-6`}>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              {video.views} views • {video.uploadTime}
            </div>
            <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {video.description}
            </p>
          </div>

          {/* Comments Toggle Button (Mobile) */}
          <button 
            onClick={() => setShowComments(!showComments)}
            className={`lg:hidden w-full flex items-center justify-center space-x-2 py-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200'} rounded-xl transition-colors mb-4`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Comments ({mockComments.length})</span>
          </button>
        </div>

        {/* Comments Sidebar */}
        <div className={`${showComments ? 'block' : 'hidden'} lg:block w-full lg:w-80 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-4 lg:border-l ${darkMode ? 'lg:border-gray-700' : 'lg:border-gray-200'} fixed lg:relative inset-0 lg:inset-auto z-50 lg:z-auto`}>
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Comments
            </h3>
            <button 
              onClick={() => setShowComments(false)}
              className={`p-2 rounded-full hover:bg-gray-200 ${darkMode ? 'hover:bg-gray-700 text-white' : ''}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            <h3 className={`font-semibold hidden lg:block ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {mockComments.length} Comments
            </h3>
            
            {/* Add comment */}
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">U</span>
              </div>
              <input
                type="text"
                placeholder="Add a comment..."
                className={`flex-1 bg-transparent border-b ${darkMode ? 'border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'} pb-1 focus:outline-none focus:border-blue-500`}
              />
            </div>
            
            {/* Comments list */}
            {mockComments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {comment.author}
                    </span>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {comment.time}
                    </span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    {comment.text}
                  </p>
                  <div className="flex items-center space-x-4">
                    <button className={`flex items-center space-x-1 text-xs ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span>{comment.likes}</span>
                    </button>
                    <button className={`text-xs ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Layout Component
export const YouTubeHome = ({ videos, onVideoClick, searchQuery, darkMode }) => {
  const filteredVideos = searchQuery 
    ? videos.filter(video => 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.channel.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : videos;

  return (
    <div className={`pt-20 pl-20 lg:pl-64 pr-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} min-h-screen`}>
      <div className="max-w-7xl mx-auto">
        {searchQuery && (
          <div className="mb-6">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Search results for "{searchQuery}" ({filteredVideos.length})
            </h2>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onVideoClick={onVideoClick}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { mockVideos };