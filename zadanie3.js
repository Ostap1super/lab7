function mergeLists(list1, list2) {
  let mergedList = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < list1.length && index2 < list2.length) {
    if (list1[index1] <= list2[index2]) {
      mergedList.push(list1[index1]);
      index1++;
    } else {
      mergedList.push(list2[index2]);
      index2++;
    }
  }

  while (index1 < list1.length) {
    mergedList.push(list1[index1]);
    index1++;
  }

  while (index2 < list2.length) {
    mergedList.push(list2[index2]);
    index2++;
  }

  return mergedList;
}

const list1 = [1, 3, 5, 7];
const list2 = [2, 4, 6, 8];
const merged = mergeLists(list1, list2);
console.log(merged); 