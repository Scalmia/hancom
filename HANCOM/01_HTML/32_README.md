# 더미데이터를 보고 한 줄 씩 질문해보기 :
```html
 <!DOCTYPE html>                       <!-- "이건 HTML 문서야" 선언 -->

<!-- 1. 이 한 줄 안 쓰면 화면이 어떻게 깨짐? -->

<html lang="ko">                        <!-- 문서 시작, 한국어 페이지 -->

<!-- 2. lang="ko"를 "en"으로 바꾸면 뭐가 달라짐? -->

<head>                                 <!-- 화면엔 안 보이는 준비 칸 -->

  <meta charset="UTF-8">               <!-- 한글 안 깨지게 -->

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 3. 이 viewport 줄은 무슨 일을 함? 모바일이랑 무슨 상관? -->

  <title>회원 가입</title>              <!-- 브라우저 탭 이름 -->

</head>

<body>                                 <!-- 화면에 보이는 진짜 칸 -->

  <header>                             <!-- 맨 위 머리말 -->

    <nav aria-label="주요 메뉴">        <!-- 메뉴 모음 -->

    <!-- 4. aria-label은 왜 붙임? 없으면 누가 불편함? -->

      <ul>

        <li><a href="#join">가입</a></li>

        <!-- 5. href="#join" 앞의 #은 무슨 뜻? -->

      </ul>

    </nav>

  </header>

  

  <main>                              <!-- 핵심 본문 -->

    <section id="join">               <!-- 한 주제 덩어리 -->

      <h2>회원 가입</h2>

      <form action="/signup" method="post">

      <!-- 6. action이랑 method가 각각 뭘 정하는 거임? -->

        <label for="email">이메일</label>

        <input type="email" id="email" name="email" required>

        <!-- 7. label의 for랑 input의 id가 똑같으면 무슨 일이 생김? -->

        <!-- 8. required 빼면 어떻게 됨? type="email"은 뭘 검사함? -->

        <fieldset>

          <legend>관심사</legend>

          <label><input type="checkbox" name="tag" value="fe"> 프론트엔드</label>

          <!-- 9. checkbox 여러 개의 name을 똑같이 "tag"로 두는 이유는? -->

        </fieldset>

        <button type="submit">가입하기</button>

      </form>

    </section>

  

    <section>

      <h2>요금제</h2>

      <table>

        <thead><tr><th>플랜</th><th>가격</th></tr></thead>

        <!-- 10. thead와 tbody를 굳이 나누는 이유는? th랑 td 차이는? -->

        <tbody>

          <tr><td>무료</td><td>0원</td></tr>

          <tr><td>프로</td><td>9,900원</td></tr>

        </tbody>

      </table>

    </section>

  </main>

  

  <footer>

    <small>&copy; 2026 커뮤니티</small>

    <!-- 11. &copy; 는 화면에 뭐로 보임? 왜 ⓒ를 직접 안 침? -->

  </footer>

</body>

</html>
```
1. `<!DOCTYPE html>` :
	- 이를 빼먹는다면 Quirks mode라는 과거 호환모드로 동작함. 즉 브라우저가 최대한 개발자의 실수를 유추해서 화면을 그려준다는 말.
	- 다만 이런 오류가 발생할 수 있음. :
		- 최신 웹 표준 CSS 규칙을 무시해서 박스크기, 여백등을 완전히 다르게 계산
		- 크롬에선 잘 나오지만 사파리나 엣지에선 깨지거나 정렬이 틀어짐
		- JS, CSS의 최신 기능이 아예 작동하지 않음.
	- 결론적으로 "이 문서에는 최신 HTML5 표준 규격을 적용하라" 라는 의미를 가지고 있음.
2. `<html lang="ko">`
	- 이 속성이 없거나 다른 언어로 바뀌었을 땐 이런 불편함을 겪음. :
		- 스크린 리더가 한국어 문장을 외국어 발음 시스템으로 읽어버림.
		- 한국인이 한국어 사이트에 접속했는데 en으로 되어 있다면 "이 영어 페이지를 한국어로 번역하시겠습니까?" 라는 팝업창을 띄움.
		- 한국 사용자를 위한 글이지만 한국 검색 결과에서 뒤로 밀려남.
		- 폰트가 어색해질 수 있음.
3. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
	- viewport는 모바일 화면에서 웹페이지가 올바르게 보이도록 조절해주는 역할을 함.
	- `width=device=width`란 웹페이지의 가로폭을 접속한 기기의 화면 폭에 똑같이 맞추라는 말임.
	- `initial-scale=1.0`은 페이지가 처음 열릴 때 확대나 축소 없이 100% 원래 크기고 보여주라는 의미임.
	- 이 태그를 빼먹고 모바일로 접속하면 스마트폰 브라우저는 이 사이트를 PC용 모니터 화면으로 인식함.
		- 그러면 전체 화면이 매우 축소되어 보이고, 반응형 웹디자인 기술이 작동하지 않고 PC 버전으로만 뜸.
	- 즉 모바일도 지원하도록 해주는 비율을 맞춰주게 하라는 코드인 것.
4. `nav aria-label="주요 메뉴">`
	- aria-label(**A**ccessible **R**ich **I**nternet **A**pplications)은 스크린 리더에서 이름표를 달아주는 역할을 함. 
	- nav는 메뉴를 안내해주는 영역임. 다만 메뉴가 하나가 아닐 때가 많음. (맨위 주요메뉴, 맨 아래 소개/이용약관메뉴, 마이페이지의 사이드바 메뉴 등)
	- aria-label이 없다면 스크린 리더는 이 세 곳을 모두 똑같이 네비게이션 영역 이라고만 읽어줌. 시각장애인 입장에선 상단 메뉴인지 하단 메뉴인지 헷갈리게 됨.
	- 만약 `<h3>주요 메뉴</h3>` 같은 글자가 이미 보이고 아 래에 nav가 있다면 굳이 쓸 필욘 없음.
		- 이 경우엔 aria-labelledby 를 사용해서 이미 있는 글자와 연결해주는 것이 좋다고 함. (지금은 굳이 안찾아보겠음.)
5. `<li><a href="#join">가입</a></li>`
	- 현재로서는 이것보다 더 좋은 앵커 기능은 없음. 다만 UX를 극적으로 올려주는 보완 방법들은 있음 :
		- `html {scroll-behavior: smooth;}` 라는걸 CSS 파일 맨 위에 추가해주면 부드러운 스크롤 효과 (CSS smooth scrolling) 을 사용해 위아래로 부드럽게 스크롤 되게 만든다고 함. #CSS
		- 만약 Fixed header가 존재한다면 # join 위치로 이동했을 때 상단바에 의해 내용이 보이지 않게 됨. 이 경우 `html { scroll-padding-top: 80px; /* 고정 메뉴바의 높이만큼 입력 */ scroll-behavior: smooth; }` 를 사용하면 메뉴바의 높이 만큼 여백을 주면서 여유있게 보여줄 수 있게 됨.
		- 시각장애인이 스크린 리더로 링크를 눌렀을 때 화면은 이동하지만 커서는 아직 위에 있는 경우가 있음. 이 경우 `<!-- 목적지 태그 예시 --><section id="join" tabindex="-1">  <h2>회원가입</h2></section>` 을 써주면 초점까지 완벽하게 이동하여 사용자가 길을 잃지 않음.
6. `<form action="/signup" method="post">`
	- action은 button을 눌렀을 때 입력한 정보를 받아서 처리해줄 서버의 프로그램 주소를 적는 곳임. 여기선 /signup 이라는 경로로 데이터를 전송하는 셈. 만약 이 값을 비워두면 현재 페이지 주소로 다시 데이터를 보냄.
	- method는 get/post중 무엇을 쓸지를 물어보는 칸임.
	- 이를 쓰기 위해선 input의 name 속성이 있어야 함. 그래야 서버가 데이터를 받았을 때 username 이라는 서랍에 데이터가 들어있구나 라고 알아챔. 다시 말해 name이 없으면 서버로 데이터가 전송되지 않음. (서버에 제대로 내가 보내는 데이터의 형식을 지정해주지 않으면 헷갈려함. 이를 위해 이름표를 달아주는 것임.)
	- 또한 submit 이 필요함. `<form>` 에 작성한 내용들이 action 주소로 method 방식을 사용하여 전송하는 것.\
7. `<label for="email">이메일</label> <input type="email" id="email" name="email" required>`
	- required는 폼을 제출하기 전에 반드시 작성해야 한다는 것을 표시하는 속성임.
	- 이 속성이 붙은 칸을 작성하지 않고 submit 하려 하면 "입력란을 작성하세요." 라는 문구가 뜸.
	- 예전에는 사용자가 빈칸으로 보냈는지 확인하기 위해 JS 코드를 써야했다고 함. HTML 5부턴 브라우저가 알아서 전송을 막고 경고창까지 띄워줌.
8. `<label><input type="checkbox" name="tag" value="fe"> 프론트엔드</label>`
	- radio와 달리 여러개를 고를 수 있는 것은 맞음. 그럼에도 name으로 묶는 이유는 이 선택지를 모두 관심 분야 라는 같은 종류의 데이터로 가져가라 라는 그룹화를 목적으로 하기 때문임.
	- 이를 다 따로 naming 한다면 서버는 같은 수십 수백개의 체크박스 변수를 만들게 됨. 이는 비효율적임.
9. `<thead><tr><th>플랜</th><th>가격</th></tr></thead>`
	- thead, tdody는 구역을 선언함. th, td는 칸 자체의 데이터를 정해주는 것.
	- 굳이 이렇게 쓰는 이유는 :
		- 표가 너무 길어 인쇄할 때 th, td 만으로 쓰면 첫 장에선 머리글이 잘 표시 되지만 2번째 장부턴 그냥 데이터들만 주르륵 생김. thead 로 구역을 만들어 두면 2번째 페이지로 넘어가도 자동으로 다시 머리글을 생성해줌.
		- thead를 구역으로 지정해 두면 css로 표 내용이 스크롤 되어도 thead 구역이 따라오게 하는 기능을 쉽게 구현할 수 있음. #CSS 
		- 스크린 리더를 쓸 때도 편리함.
10. `<small>&copy; 2026 커뮤니티</small>`
	- 요즘엔 기술이 발전해서 그냥 써도 작동은 함. 하지만 이를 쓰는 이유가 있음 :
		- 나는 잘 보이게 작성했지만 사이트를 관리하는 서버나 사용자의 옛날 브라우저가 다른 인코딩 방식을 쓴다면 글자가 깨지게 됨. 반면 &copy; 는 어떤 곳에서도 기호로 바꾸어 그리도록 한 엔티티 코드이기에 안전한 글자임.
		- 비슷한 목적으로 &nbsp;(non-Breaking space) 이라는 스페이스바가 있음.
	- 또한 small 태그는 SEO에게 중요한 본문이 아닌 저작권  표시 구역이라는 것을 알려주는 역할을 해줌.