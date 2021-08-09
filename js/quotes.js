const quotes = [
  {quote : '인생이란 자신을 찾는 것이 아니라 자신을 만드는 것이다.', author : '롤리 다스칼'},
  {quote : '좋아하는 일을 선택해라. 그러면 성공은 자연스럽게 따라온다.', author : '워렌 버핏'},
  {quote : '모든 성취의 시작 점은 갈망이다.', author : '나폴레온 힐'},
  {quote : '성공은 매일 반복한 작은 노력들의 합이다.', author : '로버트 콜리어'},
  {quote : '삶에 진정한 흥미가 있고 호기심 있는 삶은 살면 잠이 가장 중요한 것이 아니게 된다는 것을 발견한다.', author : '마사 스튜어트'},
  {quote : '중요한 질문은 "당신이 얼마나 바쁜가?가 아니다. "당신이 무엇에 바쁜가"가 핵심 질문인다.', author : '오프라 윈프리'},
  {quote : '놀라운 아이디어는 넘쳐난다. 단지 부족한 점은 그것을 실행하는 의지이다.', author : '세스 고딘'},
  {quote : '당신이 정말로 뭔가를 원한다면 기다리지 마라. 견디지 못하는 법을 스스로에게 가르쳐라.', author : '구르박쉬 차할'},
  {quote : '오늘 가장 좋게 웃는 자는 역시 최후에도 웃을것이다.', author : '니체'},
  {quote : '오늘이라는 날은 두번 다시 오지 않는 다는 것을 잊지 말라', author : '단테'},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuoto = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuoto.quote;
author.innerText = todayQuoto.author;