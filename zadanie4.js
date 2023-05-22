function insertNumberInOrder(list, number) {
  if (list.length === 0) {
    list.push(number);
    return;
  }

  let inserted = false;

  for (let i = 0; i < list.length; i++) {
    if (number < list[i]) {
      list.splice(i, 0, number);
      inserted = true;
      break;
    }
  }

  if (!inserted) {
    list.push(number);
  }
}

// Przykładowe użycie funkcji
const sortedList = [];
insertNumberInOrder(sortedList, 5);
insertNumberInOrder(sortedList, 2);
insertNumberInOrder(sortedList, 7);
insertNumberInOrder(sortedList, 3);
console.log(sortedList); 
