
import QuestionsList from './QuestionsList';
import Link from '../ui/Link';
import './questionsSection.scss';

export default function QuestionsSection() {

    return (
        <section className='questions-section'>
            <h2 className='questions-section__title'>
                Frequently Asked Questions
            </h2>
            <p className='questions-section__paragraph'>
                Here are some of our FAQs. If you have any other questions you'd like 
                answered please feel free to email us.
            </p>
            <QuestionsList />
            <div className='questions-section__link-container'>
                <Link>
                    More Info
                </Link>
            </div>
        </section>
    )
}
