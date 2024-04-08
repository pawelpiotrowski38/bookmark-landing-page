import { useState } from 'react';
import QuestionsListItem from './QuestionsListItem';
import './questionsList.scss';

const questions = [
    {
        id: 1,
        question: 'What is Bookmark?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    }, {
        id: 2,
        question: 'How can I request a new browser?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    }, {
        id: 3,
        question: 'Is there a mobile app?',
        answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
    }, {
        id: 4,
        question: 'What about other Chromium browsers?',
        answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
    },
]

export default function QuestionsList() {
    const [activeQuestionId, setActiveQuestionId] = useState(0);

    const handleChangeActiveQuestionId = function(id) {
        if (activeQuestionId && activeQuestionId === id) {
            setActiveQuestionId(0);
        } else {
            setActiveQuestionId(id);
        }
    };

    return (
        <ul className='questions-list'>
            {questions.map((question) => (
                <QuestionsListItem
                    key={question.id}
                    item={question}
                    activeQuestionId={activeQuestionId}
                    onHandleChangeActiveQuestionId={handleChangeActiveQuestionId}
                />
            ))}
        </ul>
    )
}
