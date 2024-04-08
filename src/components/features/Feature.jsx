import './feature.scss';

export default function Feature({ feature }) {
    return (
        <div className='feature'>
            <div className='feature__image-container'>
                <img
                    className='feature__image'
                    src={feature.src}
                    alt=''
                />
                <div className='feature__background-container'></div>
            </div>
            <div className='feature__content-container'>
                <h3 className='feature__title'>
                    {feature.title}
                </h3>
                <p className='feature__description'>
                    {feature.desc}
                </p>
                {/* <div className='feature__link-container'>
                    <Link>
                        More info
                    </Link>
                </div> */}
            </div>
        </div>
    )
}
