import { useState } from 'react';
import './contactForm.scss';

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = function(e) {
        setEmail(e.target.value);
    };

    const validateEmail = function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.length === 0) {
            return 'Whoops, make sure that field isn\'t empty';
        }
        if (!emailRegex.test(email)) {
            return 'Whoops, make sure it\'s an email';
        }

        return '';
    };

    const handleSubmit = function(e) {
        e.preventDefault();

        setError(validateEmail(email));
    };

    return (
        <form
            className='contact-form'
            onSubmit={handleSubmit}
        >
            <div className='contact-form__input-container'>
                <label className='contact-form__label'>
                    Email address
                </label>
                <input
                    className={`contact-form__input ${error ? 'contact-form__input--error' : ''}`}
                    type='text'
                    id='email'
                    name='email'
                    placeholder='Enter your email address'
                    value={email}
                    onChange={handleEmailChange}
                />
                {error && (
                    <>
                        <div className='contact-form__error-container'>
                            <p className='contact-form__error-text'>
                                {error}
                            </p>
                        </div>
                        <img
                            className='contact-form__error-icon'
                            src='./images/icon-error.svg'
                            alt=''
                        />
                    </>
                )}
            </div>
            <button
                className={`contact-form__button ${error ? 'contact-form__button--error' : ''}`}
                type='submit'
            >
                Contact Us
            </button>
        </form>
    )
}
