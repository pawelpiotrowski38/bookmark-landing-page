import DownloadsList from './DownloadsList';
import './downloadsSection.scss';

export default function DownloadsSection() {
    return (
        <section className='downloads-section'>
            <h2 className='downloads-section__title'>
                Download the extension
            </h2>
            <p className='downloads-section__paragraph'>
                We've got more browsers in the pipeline. Please do let us know if you’ve 
                got a favourite you'd like us to prioritize.
            </p>
            <DownloadsList />
        </section>
    )
}