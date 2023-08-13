import { useState, useEffect, useRef } from 'react';
import { Form } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import WriteDiv from '@styles/home/write/Write-styled';

const Write = ({ onClose }) => {
  const [enteredContent, setEnteredContent] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus();
    }
  }, []);

  const onEnteredContent = (e) => setEnteredContent(e.target.value);
  const isEnableSubmit = enteredContent.length >= 1;

  return (
    <WriteDiv>
      <div className='header'>
        <div className='user'>
          <img src={profileIcon} alt='user profile icon' />
          <p className='user-name'>유저</p>
        </div>

        <button className='close' onClick={onClose}>
          X
        </button>
      </div>
      <Form method='post' className='content-form'>
        <textarea
          placeholder='게시물을 작성해주세요.'
          ref={contentRef}
          value={enteredContent}
          onChange={onEnteredContent}
        />

        <button disabled={!isEnableSubmit} className=''>
          게시
        </button>
      </Form>
    </WriteDiv>
  );
};

export default Write;
