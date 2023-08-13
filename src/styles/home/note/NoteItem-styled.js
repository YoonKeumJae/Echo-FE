import styled from 'styled-components';

const NoteItemLi = styled.li`
  border-bottom: 1px solid #d9d9d9;
  box-sizing: border-box;
  padding: 4px 0;
  position: relative;

  &:first-child {
    border-top: 1px solid #d9d9d9;
  }

  .note {
    display: flex;
    flex-direction: row;
    padding: 8px 4px;
    gap: 8px;

    .profile__image {
      display: flex;
      align-items: center;

      img {
        object-fit: cover;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid #ccc;
      }
    }

    .info {
      flex: 1;
      .name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 8px;

        p {
          color: #000000;
          font-family: Inter;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
      .message {
        color: #000;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`;

export default NoteItemLi;
