export default function Logo({ src, isOnTop }) {
    const styles = {
        zIndex: isOnTop ? 5 : 1,
    }

    return (
        <a
            className='logo'
            style={styles}
            href='/'
        >
            <img
                src={src}
                alt='Home of Bookmark'
            />
        </a>
    )
}

Logo.defaultProps = {
    isOnTop: false,
}