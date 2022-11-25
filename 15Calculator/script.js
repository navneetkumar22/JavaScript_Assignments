let formula = '';

function insert(num) {
  formula += num;
  let output = document.querySelector('.textview');
  output.value = formula;
}

function equals() {
  let output = document.querySelector('.textview');
  output.value = eval(formula);

  formula = '';

}

function clean() {
  formula = '';
  let output = document.querySelector('.textview');
  output.value = '';
}

function back() {
  formula = formula.slice(0, -1);
  let output = document.querySelector('.textview');
  output.value = formula;
}