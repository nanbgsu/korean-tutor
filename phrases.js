// Everyday phrases shown when a situation is clicked. Polite -요 style. Please have a Korean speaker check these.
const PHRASES = {
  'Greetings': [
    ['안녕하세요', 'annyeonghaseyo', 'Hello'],
    ['만나서 반가워요', 'mannaseo bangawoyo', 'Nice to meet you'],
    ['감사합니다', 'gamsahamnida', 'Thank you'],
    ['괜찮아요', 'gwaenchanayo', "It's okay / I'm fine"],
    ['안녕히 가세요', 'annyeonghi gaseyo', 'Goodbye (to someone who is leaving)'],
    ['안녕히 계세요', 'annyeonghi gyeseyo', 'Goodbye (when you are the one leaving)'],
  ],
  'Introduce yourself': [
    ['제 이름은 민수예요', 'je ireumeun minsuyeyo', 'My name is Minsu'],
    ['저는 학생이에요', 'jeoneun haksaengieyo', 'I am a student'],
    ['저는 미국 사람이에요', 'jeoneun miguk saramieyo', 'I am American'],
    ['저는 BGSU에 다녀요', 'jeoneun BGSU-e danyeoyo', 'I go to BGSU'],
    ['만나서 반가워요', 'mannaseo bangawoyo', 'Nice to meet you'],
  ],
  'Ordering food and drinks': [
    ['메뉴 주세요', 'menyu juseyo', 'The menu, please'],
    ['이거 주세요', 'igeo juseyo', 'This one, please'],
    ['아메리카노 한 잔 주세요', 'amerikano han jan juseyo', 'One Americano, please'],
    ['물 좀 주세요', 'mul jom juseyo', 'Some water, please'],
    ['맛있어요', 'masisseoyo', "It's delicious"],
    ['계산할게요', 'gyesanhalgeyo', "I'd like to pay"],
  ],
  'Shopping and prices': [
    ['이거 얼마예요?', 'igeo eolmayeyo?', 'How much is this?'],
    ['너무 비싸요', 'neomu bissayo', "It's too expensive"],
    ['카드 돼요?', 'kadeu dwaeyo?', 'Can I pay by card?'],
    ['이걸로 할게요', 'igeollo halgeyo', "I'll take this one"],
    ['봉투 주세요', 'bongtu juseyo', 'A bag, please'],
  ],
  'Asking for directions': [
    ['화장실 어디예요?', 'hwajangsil eodiyeyo?', 'Where is the restroom?'],
    ['지하철역 어디예요?', 'jihacheollyeok eodiyeyo?', 'Where is the subway station?'],
    ['여기서 멀어요?', 'yeogiseo meoreoyo?', 'Is it far from here?'],
    ['오른쪽으로 가세요', 'oreunjjogeuro gaseyo', 'Go to the right'],
    ['왼쪽으로 가세요', 'oenjjogeuro gaseyo', 'Go to the left'],
    ['똑바로 가세요', 'ttokbaro gaseyo', 'Go straight'],
  ],
  'In class': [
    ['질문 있어요', 'jilmun isseoyo', 'I have a question'],
    ['다시 말해 주세요', 'dasi malhae juseyo', 'Please say it again'],
    ['천천히 말해 주세요', 'cheoncheonhi malhae juseyo', 'Please speak slowly'],
    ['이해했어요', 'ihaehaesseoyo', 'I understood'],
    ['잘 모르겠어요', 'jal moreugesseoyo', "I'm not sure / I don't know"],
  ],
  'Getting around': [
    ['여기로 가 주세요', 'yeogiro ga juseyo', 'Please take me here (taxi)'],
    ['여기서 세워 주세요', 'yeogiseo sewo juseyo', 'Please stop here (taxi)'],
    ['이 버스 시청에 가요?', 'i beoseu sicheonge gayo?', 'Does this bus go to City Hall?'],
    ['어디서 내려요?', 'eodiseo naeryeoyo?', 'Where do I get off?'],
    ['표 한 장 주세요', 'pyo han jang juseyo', 'One ticket, please'],
  ],
  'Asking for help': [
    ['도와주세요', 'dowajuseyo', 'Please help me'],
    ['길을 잃었어요', 'gireul ireosseoyo', "I'm lost"],
    ['영어 할 수 있어요?', 'yeongeo hal su isseoyo?', 'Can you speak English?'],
    ['병원 어디예요?', 'byeongwon eodiyeyo?', 'Where is the hospital?'],
    ['경찰 불러 주세요', 'gyeongchal bulleo juseyo', 'Please call the police'],
  ],
};
function showPhrases(topic) {
  const list = PHRASES[topic] || [];
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const rows = list.map(([ko, ro, en]) => `<li class="phrase-item"><div class="phrase-ko">${esc(ko)}</div><div class="phrase-ro roman">${esc(ro)}</div><div class="phrase-en">${esc(en)}</div><div class="phrase-tools"><button type="button" class="mini-button" data-sound="${esc(ko)}">Listen</button><button type="button" class="mini-button" data-sound="${esc(ko)}" data-slow="true">Slow</button><button type="button" class="mini-button" data-save="${esc(ko)}">+ My words</button></div></li>`).join('');
  const wrap = document.createElement('div');
  wrap.className = 'message tutor';
  wrap.innerHTML = `<div class="avatar">한</div><div class="bubble"><strong>${esc(topic)}</strong> — useful phrases. Listen to each one, then practice.<ul class="phrase-list">${rows}</ul><button type="button" class="practice-topic" data-practice="${esc(topic)}">Practice this with the tutor</button></div>`;
  document.getElementById('chatMessages').appendChild(wrap);
  wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
