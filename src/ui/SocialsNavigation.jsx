import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';
import './socialsNavigation.scss';

export default function SocialsNavigation({ isOnTop }) {
    const styles = {
        zIndex: isOnTop ? 5 : 1,
    }

    return (
        <nav
            className='socials-navigation'
            style={styles}
            aria-label='Socials'
        >
            <a
                className='socials-navigation__icon'
                href='/'
            >
                <FacebookIcon />
            </a>
            <a
                className='socials-navigation__icon'
                href='/'
            >
                <TwitterIcon />
            </a>
        </nav>
    )
}

SocialsNavigation.defaultProps = {
    isOnTop: false,
}
