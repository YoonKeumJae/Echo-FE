// 클릭한 좌표의 섹션을 나눠주는 함수
// 1(왼쪽), 2(중앙), 3(오른쪽)
export const getSection = (clickedX, maxX) => {
  const middle = maxX / 2;

  // 왼쪽
  if (clickedX <= middle - 317) {
    return 1;
  }

  // 오른쪽
  if (clickedX >= middle + 317) {
    return 3;
  }

  // 중앙
  return 2;
};

// 첫 번째 섹션에 대한 설명
export const getMessageForSectionOne = (clickedY) => {
  if (clickedY <= 62 && clickedY >= 17) {
    return 'Echo SNS를 상징하는 Logo 이미지입니다.';
  }

  if (clickedY <= 120 && clickedY >= 88) {
    return '현재 로그인하신 사용자님의 프로필 이미지와 닉네임입니다. 프로필 이미지를 클릭하면 사용자님의 프로필 페이지로 이동됩니다.';
  }

  if (clickedY <= 165 && clickedY >= 140) {
    return '홈 버튼으로, 클릭하면 홈페이지로 이동되어 다른 사용자들의 게시물을 확인할 수 있습니다.';
  }

  if (clickedY <= 206 && clickedY >= 193) {
    return '로그아웃 버튼으로, 클릭하면 로그아웃되어 로그인 화면으로 이동하게 됩니다.';
  }

  return '아무것도 존재하지 않는 여백의 미 입니다. 저희 Echo SNS를 이용해 주셔서 감사합니다!';
};

export const getMessageForSectionTwo = (clickedY) => {
  // eslint-disable-next-line no-console
  console.log(clickedY);
  if (clickedY >= 63 && clickedY <= 118) {
    return '게시물을 작성할 수 있는 곳으로, 클릭한 후에 간편하게 게시물을 작성할 수 있습니다.';
  }

  if (clickedY >= 129) {
    return '사용자가 올린 게시물입니다. 게시물의 내용부분을 클릭하면 사용자의 게시물을 자세하게 볼 수 있으며, 다른 사람들이 작성한 댓글 또한 볼 수 있습니다.';
  }
};

export const getMessageForSectionThree = (clickedY) => {
  if (clickedY <= 45 && clickedY >= 9) {
    return 'Echo SNS의 검색창으로, 유저명을 검색하시면 해당하는 유저들과 유저가 작성한 게시물들이 화면에 표시됩니다.';
  }

  if (clickedY <= 272 && clickedY >= 62) {
    return 'Echo SNS를 사용하고 있는 다른 친구들을 추천해줍니다. 다른 친구들을 사귀어보고 친구들과 함께 저희 Echo SNS를 즐겨보세요!';
  }

  return '아무것도 존재하지 않는 여백의 미 입니다. 저희 Echo SNS를 이용해 주셔서 감사합니다!';
};
