import { useState } from 'react';
import Feature from './Feature';
import './featuresSection.scss';

const features = [
    {
        id: 1,
        name: 'Simple Bookmarking',
        title: 'Bookmark in one click',
        desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        src: './images/illustration-features-tab-1.svg',
    },
    {
        id: 2,
        name: 'Speedy Searching',
        title: 'Intelligent search',
        desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        src: './images/illustration-features-tab-2.svg',
    },
    {
        id: 3,
        name: 'Easy Sharing',
        title: 'Share your bookmarks',
        desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        src: './images/illustration-features-tab-3.svg',
    },
];

export default function FeaturesSection() {
    const [activeFeatureId, setActiveFeatureId] = useState(1);

    const handleChangeActiveFeatureId = function(featureId) {
        setActiveFeatureId(featureId);
    };

    return (
        <section className='features-section'>
            <h2 className='features-section__title'>
                Features
            </h2>
            <p className='features-section__paragraph'>
                Our aim is to make it quick and easy for you to access your favourite websites. 
                Your bookmarks sync between your devices so you can access them on the go.
            </p>
            <ul className='features-section__buttons-list'>
                {features.map((feature) => (
                    <li key={feature.id} className='features-section__buttons-list-item'>
                        <button
                            className={`features-section__button ${activeFeatureId === feature.id ? 'features-section__button--active' : ''}`}
                            onClick={() => handleChangeActiveFeatureId(feature.id)}
                        >
                            {feature.name}
                        </button>
                    </li>
                ))}
            </ul>
            <Feature feature={features[activeFeatureId - 1]}/>
        </section>
    )
}
