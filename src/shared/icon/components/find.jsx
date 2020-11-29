import React from 'react';

const FindIcon = ({ height = 17, width = 17 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.93848 13.8926C8.33594 13.8926 9.64551 13.4707 10.7354 12.75L14.585 16.6084C14.8398 16.8545 15.165 16.9775 15.5166 16.9775C16.2461 16.9775 16.7822 16.4062 16.7822 15.6855C16.7822 15.3516 16.668 15.0264 16.4219 14.7803L12.5986 10.9395C13.3896 9.82324 13.8555 8.45215 13.8555 6.97559C13.8555 3.16992 10.7441 0.0585938 6.93848 0.0585938C3.13281 0.0585938 0.0214844 3.16992 0.0214844 6.97559C0.0214844 10.7812 3.13281 13.8926 6.93848 13.8926ZM6.93848 12.0469C4.15234 12.0469 1.86719 9.76172 1.86719 6.97559C1.86719 4.19824 4.15234 1.9043 6.93848 1.9043C9.72461 1.9043 12.0098 4.19824 12.0098 6.97559C12.0098 9.76172 9.72461 12.0469 6.93848 12.0469Z" fill="#888B90"/>
        </svg>

    );
}

export default FindIcon;