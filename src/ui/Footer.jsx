import FooterNavigation from './FooterNavigation';
import Logo from './Logo';
import SocialsNavigation from './SocialsNavigation';
import './footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <Logo src={'./images/logo-bookmark-footer.svg'} />
            <FooterNavigation />
            <SocialsNavigation />
        </footer>
    )
}
