import moment from 'moment-timezone';

/**
 * 현재 시간 받아오기 함수 - 한국
 * @returns 현재 시간
 */
export function getCurrentTime() {
  // 한국 시간으로 설정
  const asiaTime = moment().tz('Asia/Seoul');
  // UTC to KST (UTC+09:00)
  const currentTime = asiaTime.utcOffset(9 * 60).format('YYYY-MM-DD HH:mm:ss');

  return currentTime;
}

/**
 * 시간 변환 함수
 * @param {Date} date 시간
 * @returns 게시글 작성 시간
 */
export function formatDate(date) {
  const now = new Date();
  const targetDate = new Date(date);
  const timeDifference = now - targetDate;

  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const millisecondsPerMonth = 30 * millisecondsPerDay;

  if (timeDifference < millisecondsPerMonth) {
    // Less than a month ago
    const daysAgo = Math.floor(timeDifference / millisecondsPerDay);
    if (daysAgo > 0) {
      return `${daysAgo}일 전`;
    }

    const hoursAgo = Math.floor(timeDifference / (60 * 60 * 1000));
    if (hoursAgo > 0) {
      return `${hoursAgo}시간 전`;
    }

    const minutesAgo = Math.floor(timeDifference / (60 * 1000));
    return `${minutesAgo}분 전`;
  }

  // More than a month ago
  return date;
}
