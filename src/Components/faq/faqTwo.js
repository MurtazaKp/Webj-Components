import React, { useState } from 'react';

const FaqTwo = () => {
    const faq = [
        {
            question: 'How this UI Kit is different from others in the market?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            question: 'How long do you provide support?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            question: 'Do I need any experience to work with Rareblocks?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            question: 'What kind of files are included?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleQuestionClick = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Frequently Asked Questions</h2>
                    <p className="max-w-lg mx-auto mt-6 text-base text-gray-600 font-pj">
                        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mt-8 sm:mt-14">
                    <div className="space-y-4">
                        {faq.map((item, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden bg-white border border-gray-200 rounded-xl"
                            >
                                <h3>
                                    <button
                                        onClick={() => handleQuestionClick(index)}
                                        aria-expanded={openIndex === index}
                                        className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 font-pj"
                                    >
                                        <span>{item.question}</span>
                                        <span className="ml-4">
                                            <svg
                                                className={`w-6 h-6 text-gray-900 ${
                                                    openIndex === index ? 'rotate-180' : ''
                                                }`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <div className={openIndex === index ? 'px-6 pb-6 sm:px-8 sm:pb-8' : 'hidden'}>
                                    <p dangerouslySetInnerHTML={{ __html: item.answer }} className="text-gray-600"></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqTwo;
