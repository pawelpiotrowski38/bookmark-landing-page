import ArrowIcon from '../ui/ArrowIcon';
import './questionsListItem.scss';

export default function QuestionsListItem({ item, activeQuestionId, onHandleChangeActiveQuestionId }) {
    return (
        <li className='questions-list-item'>
            <button
                className='questions-list-item__question-button'
                onClick={() => onHandleChangeActiveQuestionId(item.id)}
            >
                <span className='questions-list-item__question-container'>
                    <span className='questions-list-item__question'>
                        {item.question}
                    </span>
                    <div className={`questions-list-item__arrow-icon ${activeQuestionId === item.id ? 'questions-list-item__arrow-icon--active' : ''}`}>
                        <ArrowIcon />
                    </div>
                </span>
            </button>
            {activeQuestionId === item.id && (
                <p className='questions-list-item__question-answer'>
                    {item.answer}
                </p>
            )}
        </li>
    )
}
