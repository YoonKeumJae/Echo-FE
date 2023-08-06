// 아이디, 비밀번호, 닉네임, 휴대폰 번호 정규표현식
const regExpID = /^[A-Za-z][A-Za-z0-9]{5,19}$/;
const regExpPassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d`-~!@#$%^&*()/]{8,16}$/;
const regExpNickname = /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣\d`~_]{2,8}$/;
const regExpPhone =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export { regExpID, regExpNickname, regExpPassword, regExpPhone };