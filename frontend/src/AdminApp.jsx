import React from 'react'

export default function AdminApp({ videos, onApprove, onReject }) {
  if (videos.length === 0) {
    return <p>No videos in queue.</p>
  }

  return (
    <div>
      {videos.map(v => (
        <div key={v.id} style={{ marginBottom: '1rem' }}>
          <video src={v.url} controls width="250" />
          <p>Status: {v.status}</p>
          {v.status === 'pending' && (
            <>
              <button onClick={() => onApprove(v.id)}>Mark Completed</button>
              <button onClick={() => onReject(v.id)}>Reject</button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
