import React from 'react'

const SourceRedirect = () => {
    return (
        <p 
        onClick={() => window.open('https://github.com/vrecek/quizzys', '_blank')} 
        className="source-redirect"
        >
            &lt;Source code /&gt; 
        </p>
    )
}

export default SourceRedirect