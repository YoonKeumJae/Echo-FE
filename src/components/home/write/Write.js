import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Form, useNavigation } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import WriteDiv from '@styles/home/write/Write-styled';

const Write = ({ onClose }) => {
  const [enteredContent, setEnteredContent] = useState('');
  const contentRef = useRef(null);
  const navigation = useNavigation();
  const { nickname } = useSelector((state) => state.user);
  const isSubmitting = navigation.state === 'submitting';

  useEffect(() => {
    if (navigation.state === 'loading') {
      onClose();
    }
  }, [onClose, navigation]);

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
          <p className='user-name'>{nickname}</p>
        </div>

        <button className='close' onClick={onClose}>
          X
        </button>
      </div>

      <Form method='post' className='content-form'>
        <textarea
          placeholder='게시물을 작성해주세요.'
          name='content'
          ref={contentRef}
          value={enteredContent}
          onChange={onEnteredContent}
        />

        <button disabled={!isEnableSubmit || isSubmitting} className=''>
          게시
        </button>
      </Form>
    </WriteDiv>
  );
};

export default Write;
