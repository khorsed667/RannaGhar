import React from 'react';

const Vlog = () => {
    return (
        <div className='border border-black border-3 rounded p-3'>
                <h1>here is the question answer</h1>
            <div className='border border-black border-3 rounded m-2 p-1'>
                <div>
                    <h2>Differences between uncontrolled and controlled components:</h2>
                    <p>Uncontrolled components in React are form elements that store their own state internally, while controlled components are form elements whose state is managed by the React component. In uncontrolled components, the form data is handled by the DOM itself, whereas in controlled components, the component handles the form data. Uncontrolled components are simpler to set up but may have limited functionality, while controlled components give more control and customization to the developer but can be more complex to set up.</p>
                </div>
            </div>
            <div className='border border-black border-3 rounded m-2 p-1'>
                <div>
                    <h2>How to validate React props using PropTypes:</h2>
                    <p>PropTypes is a built-in library in React that provides runtime validation of the properties passed to a component. To use PropTypes, you import the library and define the expected type and shape of each prop in the component's prop types object. For example, you can define a string prop. If the prop passed to the component does not match the expected type or shape, a warning will be logged in the console.

                    </p>
                </div>
            </div>
            <div className='border border-black border-3 rounded m-2 p-1'>
                <div>
                    <h2>Differences between Node.js and Express.js:</h2>
                    <p>Node.js is a server-side runtime environment that allows JavaScript to be run on the server, while Express.js is a web application framework that runs on top of Node.js. Node.js provides the core functionality for server-side JavaScript, while Express.js provides additional features and tools for building web applications, such as routing, middleware, and template engines. Node.js is low-level and unopinionated, while Express.js provides a higher-level abstraction for building web applications.</p>
                </div>
            </div>
            <div>
                <div className='border border-black border-3 rounded m-2 p-1'>
                    <h2>What is a custom hook, and why will you create a custom hook?</h2>
                    <p>A custom hook is a reusable function in React that encapsulates complex logic or stateful behavior. Custom hooks allow developers to extract common functionality into a reusable and composable function that can be shared across multiple components. They can be used to abstract away repetitive or boilerplate code, to manage complex stateful behavior, or to integrate with external APIs or libraries. Developers create custom hooks to simplify and modularize their code, and to improve reusability and maintainability.</p>
                </div>
            </div>
        </div>
    );
};

export default Vlog;