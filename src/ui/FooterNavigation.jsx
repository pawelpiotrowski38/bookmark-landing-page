import './footerNavigation.scss';

export default function FooterNavigation() {
    return (
        <nav
            className='footer-navigation'
            aria-label='Secondary'
        >
            <ul className='footer-navigation__list'>
                <li className='footer-navigation__list-item'>
                    <a href='/'>
                        FEATURES
                    </a>
                </li>
                <li className='footer-navigation__list-item'>
                    <a href='/'>
                        PRICING
                    </a>
                </li>
                <li className='footer-navigation__list-item'>
                    <a href='/'>
                        CONTACT
                    </a>
                </li>
            </ul>
        </nav>
    )
}