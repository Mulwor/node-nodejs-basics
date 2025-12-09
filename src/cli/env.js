const parseEnv =  () => {
  let parsedResult = Object.entries(process.env);

  let result = [];

  for (let i = 0; i < parsedResult.length; i++) {
    if (parsedResult[i][0].startsWith("RSS_")) {
      result.push(parsedResult[i][0] + parsedResult[i][1])
    }
  }

  console.log(result.join("; "))
};

parseEnv();
