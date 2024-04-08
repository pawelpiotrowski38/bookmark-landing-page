import Link from '../../ui/Link';
import './heroSection.scss';

export default function HeroSection() {
    return (
        <section className='hero-section'>
            <div className='hero-section__image-container'>
                <img
                    className='hero-section__image'
                    src='/images/illustration-hero.svg'
                    alt=''
                />
                <div className='hero-section__background-container'></div>
            </div>
            <div className='hero-section__content-container'>
                <h1 className='hero-section__title'>
                    A Simple Bookmark Manager
                </h1>
                <p className='hero-section__paragraph'>
                    A clean and simple interface to organize your favourite websites.
                    Open a new browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className='hero-section__links-container'>
                    <div className='hero-section__link-container--chrome'>
                        <Link color={'white'} bgColor={'soft-blue'} >
                            Get it on Chrome
                        </Link>
                    </div>
                    <div className='hero-section__link-container--firefox'>
                        <Link color={'dark-gray'} bgColor={'gray'} forceTextColor={true} >
                            Get it on Firefox
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
