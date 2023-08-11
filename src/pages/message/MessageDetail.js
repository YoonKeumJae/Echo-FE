import styled from 'styled-components';
import { Userside, OppositeSide } from './speechBubble';

const StyledMessageDetail = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #d8d8d8;
  .header {
    width: 100%;
    height: 102px;
    top: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #000;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: #fff;
    box-shadow: 0px 4px 2px 0px rgba(163, 163, 163, 0.15);
  }
  .header__profile {
    width: 80px;
    height: 80px;
    margin-left: 28px;
    margin-right: 28px;
    flex-shrink: 0;
    border-radius: 80px;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAD5CAMAAABRVVqZAAAAflBMVEUAAAD////6+vrw8PD39/f09PTDw8Pe3t7i4uLp6emqqqpBQUG/v78LCwuHh4e5ubmzs7ORkZFycnJ/f38VFRWenp6WlpZNTU0gICBaWlrKysptbW1ISEgpKSk1NTXX19djY2N7e3s9PT0kJCSioqIaGhpdXV03NzcuLi5mZmZ+Y5x8AAAJEElEQVR4nO2d6XrqOAxAlVC2QCFA2duGFDq3vP8LTkNYstiS4nBt65s5/+vklDjeJAUCzxiMV/P1d2Lwl/D0e2nBbraGnNjgr/1RSRZvcGdm0IAnKp3ZBoqkBm14oTLYQ4W5QSseqCTbqohQlWHtF5H6gM1UIgALg6bcquze1CawMmjMqUqqERE3rgw2WhPoGbTnTiXSiwD0DRp0prLATCA0aNGVyjtq8mnSpBuV7gdqAmeTRp2oDHXv4Bsnk1ZdqAwIEQCT5YoLlRfSxKjXu1D5JE22Ru3aVznQP0pk1LB1lQltAkOjlm2r9BgmI7OmLat0GCaGz5dtlRFH5cWsbbsqK47J3rBxqyp9jonZ+BhYVmE9Xoad3q4KukK5Y7LqumBRJWSZ/Bi3b1GFMzgCjI3bt6fSZZl8mV/AngrvRzF9fQUWVRhT+18OLa5gTYU1OkK3xRWsqbxyTAxnXzm2VMYck3WrS9hSWdMiAJ1Wl7CkMuSYGI/zOZZUTgwTk4OIIpZUGM9Xi8Exx44KY6R/NVxwPbCjwnh/DVpfxI4Kvm2fYXIKUcGOCnIolNNi6nXHigq5UnnCb2JJJcFF3tr3kwwrKjFqMmr97sqxoqI5nM+ZPOsqVlSUARNXWs5WClhR0R887p/0cGVYUdGdPL7unnkVKyqaYcUkfg3Bisq3SmTebnVSx4rKsS6yMDsOwrCi8lXx+Dk9sbffsf8y3kyeMeFSYHeI/E7j50xSVFhReUniKJ7u+m12uWhcBxw+kf9VMrqDfpL0B097avrT5Szdvn8ejx9f2/lsGSfN+pWJSr+3SktncevJuN0wMZguNOEihyX7fddUJVkpApwvnGOz4bsznRP7yesl6+dpohL25ngg14h3zQLdWPefKfO5olvmq+ywVcedrxP/twmnPI/r/ykmQqu4KifllFDJlreaSvRRxjoW6CuGpRLyznkeLKmfprNUTDEZTJCGGSrh0uCaB2xVtTsYeeQy2pkorRKzzqvqHFfqF/RwSYSzUuiC3CmVPiuYQ8N7rae+xKwzI5y1+n9EqKDbPhy20eMt2pn+097jgvLMElUZ/DzlwtvFaRot9/x3IKNJRY/BVHjhNW54rQ+ZiMrB9e3i1EYvrUrnOQ/XX6TaYXQqvIA6t1T20TQqO9e3yWLGUGHFPnjAjFSRYlLODlGpyHi6cqaoCnHc5hkJosIKR/GIjlYlJA+mPeNTq9JkjeoHqUal9VTYAWOliqSX143DUKXCCzv1i/vruKzyrKWRPUaPfYuSytT1jTWmGL9QVOGFmvtEKYC/qMLafvSJcsBSQUXWhAXgWNl4Kaj8cX1vzfio7ro+VIT1+Z/anstDhUoc94uPqkhBxeedojrfij39u8ozN9z+Pqqt1puKrJ6iPCa4qdBJ8B6hTnO5qoiaEWvKVF1Vzq5vrwEbtclVhZU77gu6g/xcxeSIzhXaMMVcpeWRmk30ibkXFQl73Tf0cSIXFUF7E0hdgYuKoOkXEhaUqdCFe7wBS23LVAS9v7AojUylzdG8XVLEJFMRtDuBRlKBpPkXXtYJuOnjPoBHZwEzU9kHXlGTXxVeIQ8fSCkVOaMKkbgDgpbCuMmvCq+ShwdQZZ0gODi+QzZUCVqQs1ahIo0hcH2HbAiTAMS8wMgKjiBm2kIm6IKY0JwpqSJmsUImf4CYYYVMW4DmQf6OoEwCOLi+RSbEtDhTwStX+wNdQxu8j8G9QlepAil7YP8tFcPsFOswVKRA1zt1fYdsGG8wKQ/YkVaR0u0Zo72Y0ANaxSw/0QH0dFLKaM+Y5IuJAiOrA4OYHWOyFg/MXd8iF7JQu5xV5DepIuegmyqCIWebgtrIDwCvc+cTVL+Xs6UHfygVQfEtRIEVEJTnQZxKCNrJpxaSEIiZhFFPGEhKv1kSKnSBXm/AV5JAFFD1C3R2DIJCXIhtF5AVmItNXiAIxWxUAF62XVK4TgYSfATcD6N4AvL9H6BqQPuGfmwBWQHTgAz5IC5x+B1RERTRekH34dVMRc7yPkcTt5OpcL7h6BNv6vqAmYq0whqayJ3LBrmY3fwbytD8i4qgef4V1ehyURETffRAkU94URE1Ob5Sd8kPkwSt7+/UhpdcRdSM8kZ1tzJXkbSSfJCqVARthhUZhQqVg+u7MmPTr6vIWrMUiGoqEl/HOdtuRQX52ov3xBUVWaUpyowGJRVxs+MSi05BRfITljHpSC1+oiC9qwhK9FTzzyM2SdA5i5L4oSJw0VKiW4gYc30v7VgXi2qJnOnfiYsqwjZcK7yUCtAJ26UssS/X0hM7PYbLcVhRRU5idI1NUFYR3PGXVRW5c8puVUXsiD8PairSSk/e6NdVat8QlEEemVBRkTkR66lURG65XmtQVlXklHd4EKtV5FQSuHOLpa6pyJu9RDoV1Tdd/SbQqkjrLZFeRdjP8kiTVqjIOsaPMRVRAWKFusYqFUkr4x2uEoipjFCKq1CqyNmpHFAqYjaQSwEimiRQISmGqmPVKjJ6frlKjS41V0IETyUJRKcSCkhe13+IoYz/ARbVQCp97rfvj1gtiw1JY/d8WlnL9EZU/H6L1cuFYcUFTq5vF0ERm4/WSfB4iqwIZ0dV/J2LqSLA8eoVvq7ClBmSRCEOT9/IypIbVE0RL+eV6kQ8SsXHQDFNWXay0ot/3UVX/YguWuPdqZ4urYhW8S28SpuxylDxa3TR1zdlqHh1rKfN9OKp+LS7r/iufSMVf7o+Vp6Zp+LLKTha85+p4sfRsfp7Xk1VXjzIB8PrObBVgo7zXPYVcYdslaDjeDuJLpjNVgmGxi5/zvt5OplM0r35upSsdNZEJegYfJl8f0oqxbAGvYnBygHv8Y1VgrBZSOI60s38wl7DYnFUQa3GKk2+7/seEdUVd/yxakN9uMBEhfu1qQlRNerCcMV7w5/V6c9tVYKE7vwfEe/av4wZQy9ZIN9UhZyQbTnP9YPkgDc3RyaQZQxUgoF+Mfa2IuuP1hgi/5sDq5fkmKj8dtmt8sJn/BNPWsKe+iuiiwYipipZl60MDm/pjt1DFIS7WXn4/El7DdszVfmlM56l68/jz9d5Eu2aP1eqFnfTaDaZzKJeYvBv+Re4An3olw9OGAAAAABJRU5ErkJggg=='),
      lightgray 50% / cover no-repeat;
  }
  .body {
    top: 102px;
    width: 100%;
    height: calc(100% - 204px);
    display: inline-flex;
    flex-direction: column;
    background-color: #fcfcfc;
  }
  .messageForm {
    width: 100%;
    height: 102px;
    display: flex;
    flex-direction: row;
    border: none;
    bottom: 0px;
  }
  .messageInput {
    width: 90%;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    padding: 25px;
  }
  .messageSubmit {
    right: 18px;
    margin-right: 18px;
  }
`;

const MessageDetail = () => {
  return (
    <StyledMessageDetail>
      <div className='header'>
        <div className='header__profile'></div>
        김애용
      </div>

      <div className='body'>
        <OppositeSide />
        <Userside />
      </div>

      <form className='messageForm'>
        <input
          className='messageInput'
          type='text'
          placeholder='보낼 내용을 입력해주세요.'
        />
        <button className='messageSubmit' type='submit'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='70'
            height='70'
            viewBox='0 0 70 70'
            fill='none'
          >
            <path
              d='M60.1552 16.7151C61.4433 13.1519 57.9906 9.69909 54.4277 10.9902L10.8818 26.7397C7.30693 28.0338 6.8746 32.9119 10.1633 34.8172L24.0634 42.8649L36.4756 30.4519C37.038 29.9088 37.7911 29.6083 38.5729 29.6151C39.3546 29.6218 40.1024 29.9354 40.6552 30.4883C41.208 31.0411 41.5216 31.789 41.5284 32.5708C41.5352 33.3526 41.2347 34.1058 40.6916 34.6681L28.2793 47.0811L36.3295 60.9819C38.2318 64.2708 43.1096 63.8354 44.4036 60.2633L60.1552 16.7151Z'
              fill='#243DC5'
            />
          </svg>
        </button>
      </form>
    </StyledMessageDetail>
  );
};

export default MessageDetail;
