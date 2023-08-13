import moment from 'moment-timezone';

/**
 * 현재 시간 받아오기 함수 - 한국
 * @returns 현재 시간
 */
function getCurrentTime() {
  // 한국 시간으로 설정
  const asiaTime = moment().tz('Asia/Seoul');
  // UTC to KST (UTC+09:00)
  const currentTime = asiaTime.utcOffset(9 * 60).format('YYYY-MM-DD HH:mm:ss');

  return currentTime;
}

export default getCurrentTime;
