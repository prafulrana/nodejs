import React, { useState } from 'react'

export default function UserApp({ onUpload }) {
  const [file, setFile] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (file) {
      onUpload(file)
      setFile(null)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="video/*"
        capture="user"
        onChange={e => setFile(e.target.files[0])}
      />
      <button type="submit" disabled={!file}>Upload to YouTube</button>
    </form>
  )
}
