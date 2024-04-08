import DownloadsListItem from './DownloadsListItem';
import './downloadsList.scss';

const browsers = [
    {
        id: 1,
        src: './images/logo-chrome.svg',
        browser: 'Chrome',
        minVersion: '62',
    }, {
        id: 2,
        src: './images/logo-firefox.svg',
        browser: 'Firefox',
        minVersion: '55',
    }, {
        id: 3,
        src: './images/logo-opera.svg',
        browser: 'Opera',
        minVersion: '46',
    },
]

export default function DownloadsList() {
    return (
        <ul className='downloads-list'>
            {browsers.map((browser) => (
                <DownloadsListItem
                    key={browser.id}
                    item={browser}
                />
            ))}
        </ul>
    )
}
