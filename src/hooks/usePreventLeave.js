/**
 * 페이지를 벗어날 때 경고창을 표시해주는 함수
 * @returns beforeunload add, remove 함수
 */
const usePreventLeave = () => {
  function listener(e) {
    e.preventDefault();
    e.returnValue = '';
  }

  function enablePrevent() {
    window.addEventListener('beforeunload', listener);
  }

  function disablePrevent() {
    window.removeEventListener('beforeunload', listener);
  }

  return [enablePrevent, disablePrevent];
};

export default usePreventLeave;
