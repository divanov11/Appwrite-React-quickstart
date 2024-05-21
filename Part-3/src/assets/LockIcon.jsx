import React from "react";

const LockIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#d6ad31"
            fill="none"
            strokeWidth="1.5"
        >
            <path d="M4 13c0-1.886 0-2.828.586-3.414C5.172 9 6.114 9 8 9h8c1.886 0 2.828 0 3.414.586C20 10.172 20 11.114 20 13v4c0 1.886 0 2.828-.586 3.414C18.828 21 17.886 21 16 21H8c-1.886 0-2.828 0-3.414-.586C4 19.828 4 18.886 4 17v-4Z"></path>
            <path strokeLinejoin="round" d="M16 9V7a4 4 0 1 0-8 0v2"></path>
            <path d="M12.75 14.125a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
            <path strokeLinecap="round" d="M12 13.625v3"></path>
        </svg>
    );
};

export default LockIcon;
