import './logo.scss';

export default function Logo({ isState }) {
    return (
        <a className='logo' href='/'>
            <img
                src={`/images/${isState ? 'logo-bookmark-light.svg' : 'logo-bookmark.svg'}`}
                alt='Home of Bookmark'
            />
        </a>
    )
}