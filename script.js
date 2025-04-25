  // DOMContentLoaded 이벤트 후에 실행
  document.addEventListener('DOMContentLoaded', function() {
    // fade-in 클래스를 가진 모든 요소 선택
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // 각 요소에 순차적으로 visible 클래스를 추가하여 애니메이션 실행
    fadeElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 500); // 각 요소 사이에 500ms 간격을 줌
    });
  });