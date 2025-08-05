import React, { useState } from 'react'
import UserApp from './UserApp.jsx'
import AdminApp from './AdminApp.jsx'

export default function App() {
  const [videos, setVideos] = useState([])
  const [view, setView] = useState('user')

  const handleUpload = async file => {
    // Placeholder for YouTube API integration
    const id = Date.now()
    const url = URL.createObjectURL(file)
    setVideos(v => [...v, { id, url, status: 'pending', file }])
    alert('Video uploaded (simulated) to YouTube')
  }

  const markCompleted = id => {
    setVideos(v => v.map(video => video.id === id ? { ...video, status: 'completed' } : video))
  }

  const reject = id => {
    setVideos(v => v.map(video => video.id === id ? { ...video, status: 'rejected' } : video))
  }

  return (
    <div>
      <nav>
        <button onClick={() => setView('user')}>User</button>
        <button onClick={() => setView('admin')}>Admin</button>
      </nav>
      {view === 'user'
        ? <UserApp onUpload={handleUpload} />
        : <AdminApp videos={videos} onApprove={markCompleted} onReject={reject} />}
    </div>
  )
}
