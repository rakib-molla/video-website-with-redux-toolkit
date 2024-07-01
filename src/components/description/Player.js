import React from 'react'

export default function Player({link, title}) {
    
    return (
        <div className="aspect-video" style={{ width: '100%' }}>
            <iframe
                width="100%"
                height="100%"
                src={link}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}
