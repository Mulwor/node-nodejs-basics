const parseArgs = () => {
  let parsedResult = process.argv;
  
  let result = [];
  
  for (let i = 2; i < parsedResult.length; i += 2) {
    let key = parsedResult[i].replaceAll('--', '');
    let value = parsedResult[i + 1];

    result.push(`${key}: ${value}`);
  }

  console.log(result.join('; '))
};

parseArgs();
