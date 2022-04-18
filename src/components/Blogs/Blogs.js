import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blog'>
            <div>
                <h2 style={{ color: 'gold' }}>What is Context Api?</h2>
                <p>If we want to take data from the parent component or a child component several levels below the top level component, then we need to take the help of the parent of that child component and the parent of that parent. It's like taking data while digging to pass. We usually use Redux in such situations. Or the situation may be more complicated than that. In that case we have a global status that any child can access later if they want, without passing all the elements as props and not accepting data. context api It also creates a stat at the very top level. And later you can access that data with any child component you want.</p>
            </div>

            <div>
                <h2 style={{ color: 'gold' }}>What is Simantic Tag</h2>
                <p>The html 5 version uses more semantic tags. A semantic tag is an advanced label tag where each part has a unique meaningfull name. By which a developer can easily understand what has been done in this part by looking at the tag. <br />
                    <span>Example: "article, header, main, nav , sections , footer, aside, figure"</span></p>
            </div>
        </div>
    );
};

export default Blogs;