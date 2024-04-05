import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import Logo from './Logo';
import MainNavigation from './MainNavigation';
import Mask from './Mask';
import './header.scss';
import SocialsNavigation from './SocialsNavigation';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuOpen = function() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='header'>
            <Mask isState={isMobileMenuOpen} />
            <Logo isState={isMobileMenuOpen} />
            <HamburgerButton
                isState={isMobileMenuOpen}
                handleState={handleMobileMenuOpen}
            />
            <div className={`header__nav-container ${isMobileMenuOpen ? 'header__nav-container--visible' : ''}`}>
                <MainNavigation />
                <div className='header__socials-nav-container'>
                    <SocialsNavigation />
                </div>
            </div>
        </header>
    )
}
