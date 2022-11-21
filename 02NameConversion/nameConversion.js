let input = document.querySelector("#text");
let button = document.querySelector("#convert-btn");

// Declaring funtion for every case :
// Camel Case
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

//   Pascal Case
function toPascalCase(string) {
    return `${string}`
      .toLowerCase()
      .replace(new RegExp(/[-_]+/, 'g'), ' ')
      .replace(new RegExp(/[^\w\s]/, 'g'), '')
      .replace(
        new RegExp(/\s+(.)(\w*)/, 'g'),
        ($1, $2, $3) => `${$2.toUpperCase() + $3}`
      )
      .replace(new RegExp(/\w/), s => s.toUpperCase());
  }

//   Snake Case
const snakeCase = string => {
    return string.replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_');
};

// Screaming Snake Case

function toSnakeCase(str) {
    return str
      .split(" ")
      .map((character) => {
        if (character == character.toLowerCase()) {
          return "" + character.toUpperCase();
        } else {
          return character;
        }
      })
      .join("_");
  }
  
//   Kebab Case

  function kebabCase(str){
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').toLowerCase();
  }

//   Screaming kebab case
  function toKebabCase(str) {
    return str
      .split(" ")
      .map((character) => {
        if (character == character.toLowerCase()) {
          return "" + character.toUpperCase();
        } else {
          return character;
        }
      })
      .join("-");
  }




//  Adding event listener to button
button.addEventListener("click", () => {
    document.querySelector("#camel-case").innerHTML = camelize(input.value);  // Camel case

    document.querySelector("#pascal-case").innerHTML = toPascalCase(input.value);  // pascal case

    document.querySelector("#snake-case").innerHTML = snakeCase(input.value);  // snake case

    document.querySelector("#screaming-snake-case").innerHTML = toSnakeCase(input.value);  // screaming snake case
    
    document.querySelector("#kebab-case").innerHTML = kebabCase(input.value);  // kebab case
    
    document.querySelector("#screaming-kebab-case").innerHTML = toKebabCase(input.value);  // screaming-kebab case

})