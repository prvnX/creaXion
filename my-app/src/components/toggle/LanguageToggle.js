import React from "react";
import "./LanguageToggle.css";

const LanguageToggle = ({toggleLang}) => {
    return (
        <div className='language_toggle'>
            <input
                className='language_toggle_input'
                type='checkbox'
                id='language-toggle'
                onChange={toggleLang}
            />
            <label className='language_toggle_label' htmlFor='language-toggle'>
                <span className="language_text eng_text">En</span>
                <span className="language_text sin_text">සිං</span>
            </label>
        </div>
    );
};

export default LanguageToggle;
