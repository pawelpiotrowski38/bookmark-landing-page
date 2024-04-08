import Link from '../../ui/Link';
import './downloadsListItem.scss';

export default function DownloadsListItem({ item }) {
    return (
        <li className='downloads-list-item'>
            <img
                className='downloads-list-item__image'
                src={item.src}
                alt=''
            />
            <h3 className='downloads-list-item__title'>
                {`Add to ${item.browser}`}
            </h3>
            <span className='downloads-list-item__info'>
                {`Minimum version ${item.minVersion}`}
            </span>
            <img
                className='downloads-list-item__dots'
                src='./images/bg-dots.svg'
                alt=''
            />
            <Link>
                Add & Install Extension
            </Link>
        </li>
    )
}
