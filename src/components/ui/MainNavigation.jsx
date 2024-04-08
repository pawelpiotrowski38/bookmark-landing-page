import './mainNavigation.scss';

export default function MainNavigation() {
    return (
        <nav
            className='main-navigation'
            aria-label='Primary'
        >
            <ul className='main-navigation__list'>
                <li className='main-navigation__list-item'>
                    <a href='/'>
                        FEATURES
                    </a>
                </li>
                <li className='main-navigation__list-item'>
                    <a href='/'>
                        PRICING
                    </a>
                </li>
                <li className='main-navigation__list-item'>
                    <a href='/'>
                        CONTACT
                    </a>
                </li>
            </ul>
            <div className='main-navigation__login-link-container'>
                <a className='main-navigation__login-link' href='/'>
                    LOGIN
                </a>
            </div>
        </nav>
    )
}