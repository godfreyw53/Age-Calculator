const userInput = document.getElementById('date');
const calculateAge = document.querySelector('.js-calculate');
const result = document.querySelector('.result');

calculateAge.addEventListener('click', () => {

  if (userInput.value === "") {
    return alert('Please select year, month and day of birth to proceed');
  }

  let birthDate = new Date(userInput.value);
  let today = new Date();

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3 = d2 - d1;
  let m3 = m2 - m1;
  let y3 = y2 - y1;

  // Fix days
  if (d3 < 0) {
    m3--;
    let prevMonth = m2 - 1 === 0 ? 12 : m2 - 1;
    let prevYear = prevMonth === 12 ? y2 - 1 : y2;
    d3 += getDaysInMonth(prevYear, prevMonth);
  }

  // Fix months
  if (m3 < 0) {
    y3--;
    m3 += 12;
  }

  // Final safety check
  if (y3 < 0) {
    y3 = 0;
    m3 = 0;
    d3 = 0;
  }

  result.innerHTML = `You have ${y3} years ${m3} months and ${d3} days old`;
});

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
