import profileIcon from '@assets/default/profileIcon.png';
import StyledNotification from '@styles/home/notification/Notification-styled';

const DUMMY_NOTIFICATIONS = [
  {
    id: 1,
    profile: '',
    message: '이민형님이 게시글에 좋아요를 눌렀습니다.',
    type: 'message',
  },
  {
    id: 2,
    profile: '',
    message: '이민형님이 친구 추가 요청을 보냈습니다.',
    type: 'add',
  },
  {
    id: 3,
    profile: '',
    message: '이민형님이 댓글을 추가하였습니다.',
    type: 'message',
  },
];

const NotificationPage = () => {
  return (
    <StyledNotification>
      <h3 className='title'>알림</h3>
      <div className='notification-list'>
        {DUMMY_NOTIFICATIONS.map((notification) => (
          <div key={notification.id} className='notification'>
            <div className='message'>
              <img src={profileIcon} alt='profile icon' />
              <p>{notification.message}</p>
            </div>

            {notification.type === 'add' ? (
              <div className='button-box'>
                <button>추가</button>
                <button>취소</button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </StyledNotification>
  );
};

export default NotificationPage;
