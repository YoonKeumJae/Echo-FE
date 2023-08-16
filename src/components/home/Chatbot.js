import chatbotIcon from '@assets/util/chatbot.png';

const Chatbot = () => {
  return (
    <div className='chatbot'>
      <p>Message</p>
      <button>
        <img src={chatbotIcon} alt='chatbot Icon' />
      </button>
    </div>
  );
};

export default Chatbot;
