// 33

function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
  if(message.length <= maxLength){
  result = message.slice(0, maxLength)
  }else if(message.length > maxLength){
  result = message.slice(0, maxLength) + '...'
  }

// Пиши код выше этой строки
  return result;
}

// 34

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  return normalizedInput;
}

// 35

function checkForName(fullName, name) {
 const result = fullName.includes(name) ; // Дополни эту строку
  return result;
}

// 36

function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
 if(true){
 result = message.toLowerCase().includes('sale')||message.toLowerCase().includes('spam');
 } else {
 result = false;
 }
  // Пиши код выше этой строки
  return result;
}