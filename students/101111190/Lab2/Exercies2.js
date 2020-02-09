const makeUpperCase = words => {
    return new Promise((resolve, reject) => {
      if (
        words.every(word => {
          return typeof word === 'string';
        })
      ) {
        resolve(
          sortWords(
            words.map(word => {
              return word.toUpperCase();
            })
          )
        );
      } else {
        reject('Not all items in the array are string!');
      }
    });
  };
  
  const sortWords = words => {
    return new Promise((resolve, reject) => {
      if (words) {
        resolve(words.sort());
      } else {
        reject('strings only!');
      }
    });
  };
  
  const arrayOfNames = ['jaxx' , 'tiny', 'clay'];
  
  makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  
  const mixedArray = ['anarchy', 99, true];
  
  makeUpperCase(mixedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
    