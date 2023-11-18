import React from 'react';

const Questions = () => {
    return (
        <div>
            <div className='mb-6'>
                <h1 className='font-semibold text-3xl mb-2'><span className='font-bold'>Question : </span>What is the difference between props and state ?</h1>
                <p className='text-xl'><span className='font-bold'>Answer : </span>Props are used to pass data from a parent component to a child component, while state is used to manage data within a component.</p>
            </div>
            <div className='mb-6'>
                <h1 className='font-semibold text-3xl mb-2'><span className='font-bold'>Question : </span>How Does useState() Work?</h1>
                <p className='text-xl'><span className='font-bold'>Answer : </span>The useState() hook works by handling and managing state in your applications. The useState() hook takes the first (initial) value of the state variable as its argument. The second value then sets your state, which is why it's always initiated as setState</p>
            </div>
            <div className='mb-6'>
                <h1 className='font-semibold text-3xl mb-2'><span className='font-bold'>Question : </span>What is the purpose of useEffect other than fetching data?</h1>
                <p className='text-xl'><span className='font-bold'>Answer : </span>The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</p>
            </div>
            <div className='mb-6'>
                <h1 className='font-semibold text-3xl mb-2'><span className='font-bold'>Question : </span>how does react work?</h1>
                <p className='text-xl'><span className='font-bold'>Answer : </span>React relies on a virtual DOM, which is a copy of the actual DOM. React's virtual DOM is immediately reloaded to reflect this new change whenever there is a change in the data state. After which, React compares the virtual DOM to the actual DOM to figure out what exactly has changed.</p>
            </div>
        </div>
    );
};

export default Questions;