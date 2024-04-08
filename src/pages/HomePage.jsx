import ContactSection from '../components/contact/ContactSection';
import DownloadsSection from '../components/downloads/DownloadsSection';
import FeaturesSection from '../components/features/FeaturesSection';
import HeroSection from '../components/hero/HeroSection';
import QuestionsSection from '../components/questions/QuestionsSection';
import './homePage.scss';

export default function HomePage() {
    return (
        <div className='home-page'>
            <HeroSection />
            <FeaturesSection />
            <DownloadsSection />
            <QuestionsSection />
            <ContactSection />
        </div>
    )
}
