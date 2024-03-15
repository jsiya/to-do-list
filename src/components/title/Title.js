import './TitleStyles.css';
import React, { useState } from 'react';

function Title({ addTask }){
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = () => {
        if (title.trim() !== '') {
            addTask(title, new Date().toLocaleDateString());
            setTitle('');
        }
    };
    return (
        <section className="add-new-element-section">
            <input id="task" type="text" placeholder="New Title..." value={title} onChange={handleChange}/>
            <button className="add-btn" onClick={handleSubmit}>+</button>
        </section>
    );
}

export default Title