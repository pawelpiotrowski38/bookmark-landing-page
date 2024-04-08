import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import Logo from './Logo';
import MainNavigation from './MainNavigation';
import SocialsNavigation from './SocialsNavigation';
import Mask from './Mask';
import './header.scss';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuOpen = function() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='header'>
            <Mask isState={isMobileMenuOpen} />
            <Logo
                src={`${isMobileMenuOpen ? './images/logo-bookmark-light.svg' : '/images/logo-bookmark.svg'}`}
                isOnTop={true}
            />
            <HamburgerButton
                isState={isMobileMenuOpen}
                handleState={handleMobileMenuOpen}
            />
            <div className={`header__nav-container ${isMobileMenuOpen ? 'header__nav-container--visible' : ''}`}>
                <MainNavigation />
                <div className='header__socials-nav-container'>
                    <SocialsNavigation isOnTop={true} />
                </div>
            </div>
        </header>
    )
}
