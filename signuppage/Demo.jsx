import React, { useEffect, useState } from 'react';
import './Question.css';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => {
  const [isPlus, setIsPlus] = useState(false);

  const handleToggle = () => {
    setIsPlus((prevIsPlus) => !prevIsPlus);
  };

  return (
    <div className="grid-item">
      <div onClick={handleToggle}>
        {question}
        <div className="wrap">
          <div className={isPlus ? 'toggle open' : 'toggle'}></div>
        </div>
      </div>
      {isPlus && <div className="answer">{answer}</div>}
    </div>
  );
};

const Demo = () => {
  useEffect(() => {
    // ... your existing useEffect logic
  }, []);

  return (
    <>
      <div className="backg">
        <h1 className="h1">Frequently Asked Questions </h1>
        <div className="grid-container">
          <FAQItem question="What is Netflick?" answer="Netflick is..." />
          {/* Add more FAQ items as needed */}
        </div>
        <p className="para">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="signup">
          <input className="input" type="email" placeholder="Email address" />
          <Link id="sign" to="/NextSignup">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Demo;
