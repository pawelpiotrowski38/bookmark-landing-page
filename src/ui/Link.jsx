import { useState } from 'react';
import './link.scss';

export default function Link({ color, bgColor, forceTextColor, children }) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = function() {
        setIsHover(true);
    };

    const handleMouseLeave = function() {
        setIsHover(false);
    };

    var styles;
    if (!isHover) {
        styles = {
            color: `var(--${color})`,
            backgroundColor: `var(--${bgColor})`,
            borderColor: `var(--${bgColor})`,
        }
    } else {
        styles = {
            borderColor: `var(--${forceTextColor ? color : bgColor})`,
            color: `var(--${forceTextColor ? color : bgColor})`,
            backgroundColor: 'var(--white)',
        }
    }

    return (
        <a
            className='link'
            href='/'
            style={styles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </a>
    )
}

Link.defaultProps = {
    color: 'white',
    bgColor: 'soft-blue',
    forceTextColor: false,
}
