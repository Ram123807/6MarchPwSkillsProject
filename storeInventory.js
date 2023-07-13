var storeList = { 'apple': 1, 'banana': 2, 'copy': 3, 'pen': 6 };

for (var key in storeList) {
  if (storeList.hasOwnProperty(key)) {
    storeList[key] *= 80;    // change USD to INR
  }
}

console.log(storeList);