import ContactForm from './ContactForm';
import './contactSection.scss';

export default function ContactSection() {
    return (
        <section className='contact-section'>
            <div className='contact-section__wrapper'>
                <span className='contact-section__span'>
                    35,000+ ALREADY JOINED
                </span>
                <h2 className='contact-section__title'>
                    Stay up-to-date with what we’re doing
                </h2>
                <ContactForm />
            </div>
        </section>
    )
}
