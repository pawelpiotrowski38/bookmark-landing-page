import './hamburgerButton.scss';

export default function HamburgerButton({ isState, handleState }) {
    return (
        <button className='hamburger-button' onClick={handleState} >
            <img
                src={`/images/${isState ? 'icon-close.svg' : 'icon-hamburger.svg'}`}
                alt='Open mobile menu'
            />
        </button>
    )
}
