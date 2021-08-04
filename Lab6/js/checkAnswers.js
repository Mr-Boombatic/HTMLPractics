let form = document.querySelector('form');

let submit = document.querySelector('#send-btn');
submit.onclick = (event) => {
  event.preventDefault();
  console.log(serialize(form));
  checkAnswers(serialize(form));
}

function checkAnswers(answers) {
  let mark = 0;
  let a = answers.split('&').reverse();
  if (a[0] == 'q1-r1=a2') mark++;
  if (a.includes('q2-ch1=on') && a.includes('q2-ch2=on') && !a.includes('q2-ch3=on')) mark++;
  if (a.includes('q3=%D1%82%D0%B8%D0%BC%D1%83%D1%81')) mark++;
  if (a.includes('q4=1963')) mark++;
  if (a[a.length-1] == 'q5-s3=a2' && a[a.length-2] == 'q5-s2=a3' && a[a.length-3] == 'q5-s1=a1') mark++;

  let rightAnswersCount = mark;
  if (rightAnswersCount > 4) mark = 5;
  else if (rightAnswersCount > 3) mark = 4;
  else if (rightAnswersCount > 2) mark = 3;
  else mark = 2;
  alert('Правильных ответов: ' + rightAnswersCount + '\n' + 'Ваша оценка - ' + mark);
}
