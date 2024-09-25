import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    className = '',
    textColor = '',
    ...props
}) {
    return (
        <button
            type={type} 
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} 
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
