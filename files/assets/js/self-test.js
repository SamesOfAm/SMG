const selfTestContainer = document.getElementById('self-test');
const question = document.getElementById('question');
const answerContainer = document.querySelector('.answers');
const allAnswers = document.querySelectorAll('.answers div');
const backButton = document.querySelector('.back-button');
const newButton = document.querySelector('.new-button');
const progressBar = document.querySelector('.progress-bar-fill');
let currentQuestion = 0;
let score = 0;
let amounts = [];

const questions = [
  "Ich hatte wenig Interesse und Freude an meinen alltäglichen Tätigkeiten.",
  "Ich hatte Wutausbrüche, die ich nicht kontrollieren konnte.",
  "Ich habe mich gefragt, warum ich manchmal so verbittert bin.",
  "Ich war niedergeschlagen oder schwermütig.",
  "Ich war hoffnungslos.",
  "Ich habe meine Gefühle für mich behalten.",
  "Ich habe alles in mich hineingefressen.",
  "Ich war leicht reizbar und verärgert.",
  "Ich bin immer wieder in Streitigkeiten geraten.",
  "Ich fühlte mich gehetzt.",
  "Ich habe mehr Alkohol getrunken als sonst, um mich besser zu fühlen.",
  "Ich hatte zuviel zu tun.",
  "Ich habe Leute angeschrien.",
  "Ich habe häufiger an Alkohol gedacht.",
  "Ich bin schon so ausgerastet, dass ich Gegenstände zerschlagen habe.",
  "Ich habe mir vorgenommen, weniger Alkohol zu trinken.",
  "Ich fand es wichtig, nach außen hin zu funktionieren.",
  "Ich fühlte mich unter Termindruck.",
  "Ich habe mich in die Arbeit gestürzt, um mich abzulenken.",
  "Es war mir lieber zu arbeiten, als mit meinen Freunden /meiner Familie zusammen zu sein.",
  "Ich habe versucht, allein mit meinen Problemen fertig zu werden.",
  "Ich hatte nicht genug Zeit für mich.",
  "Ich bin aggressiv und rücksichtslos Auto gefahren, um mich abzureagieren.",
  "Ich hatte das Gefühl, dass zu viele Forderungen an mich gestellt werden.",
  "Ich habe mich mit meinem Fahrstil selber gefährdet."
];

const outcomes = [
  "Ihr Ergebnis: Wenn Sie ehrlich zu sich waren, ist alles in Ordnung. In dieser Größenordnung besteht kein erkennbares Risiko für eine stressbedingte Erkrankung.",
  "Ihr Ergebnis: Sie müssen noch nicht von einem ernsthaften Erkrankungsrisiko ausgehen. In dieser Größenordnung gehören Stressssymptome durchaus zum Alltag, wenn man mit stärkeren Herausforderungen oder Belastungen konfrontiert ist. Entscheidend ist, dass diese Symptome nach einer gewissen Zeit wieder verschwinden. Dafür können Sie selbst eine Menge tun.",
  "Ihr Ergebnis: Es besteht ein begründeter Verdacht für eine Depression, da sich die Symptome bzw. deren Dauer summieren. Um sicher zu gehen, sollten Sie sich professionelle Unterstützung holen, z.B. bei einem Psychotherapeuten oder Ihrem Arzt."
]

question.innerHTML = questions[currentQuestion];

const finishQuestionnaire = () => {
  answerContainer.style.display = 'none';
  backButton.style.display = 'none';
  newButton.style.display = 'block';
  if(score <= 7) {
    question.innerHTML = outcomes[0];
  } else if(score > 7 && score <= 18) {
    question.innerHTML = outcomes[1];
  } else {
    question.innerHTML = outcomes[2];
  }
}

newButton.addEventListener('click', function() {
  answerContainer.style.display = 'flex';
  newButton.style.display = 'none';
  question.innerHTML = "Ich hatte wenig Interesse und Freude an meinen alltäglichen Tätigkeiten.";
  currentQuestion = 0;
  score = 0;
  amounts = [];
  progressBar.style.width = '0%';
})

backButton.addEventListener('click', function() {
  /*console.log(currentQuestion);
  console.log(amounts[currentQuestion-1])*/;
  score = score-amounts[currentQuestion-1];
  currentQuestion--;
  amounts.splice(-1);
  if(currentQuestion === 0) {
    backButton.style.display = 'none';
  }
  progressBar.style.width = currentQuestion * 100 / 25 + '%';
  question.innerHTML = questions[currentQuestion];
  /*console.log('Current question: ', currentQuestion);
  console.log('Current score: ', score);
  console.log('Amounts: ', amounts);*/
})

allAnswers.forEach(answer => {
  answer.addEventListener('click', function() {
    const amount = parseInt(answer.dataset.amount);
    backButton.style.display = 'blocK';
    score = score+amount;
    currentQuestion++;
    amounts.push(amount);
    if(currentQuestion <= 24) {
      question.innerHTML = questions[currentQuestion];
    } else {
      finishQuestionnaire();
    }
    progressBar.style.width = currentQuestion * 100 / 25 + '%';
  })
})

