


const calculateCumulation = (element, date) => {
  
  console.log(date)
  
  // sum calculation
  let redsSum = 0;
  let yellowsSum = 0;
  let greensSum = 0;

  

  if(element.family === 1) redsSum++;
  else if (element.family === 2) yellowsSum++;
  else if (element.family === 3) greensSum++;

  if(element.health === 1) redsSum++;
  else if (element.health === 2) yellowsSum++;
  else if (element.health === 3) greensSum++;
  
  if(element.legal === 1) redsSum++;
  else if (element.legal === 2) yellowsSum++;
  else if (element.legal === 3) greensSum++;

  if(element.social === 1) redsSum++;
  else if (element.social === 2) yellowsSum++;
  else if (element.social === 3) greensSum++;

  if(element.work === 1) redsSum++;
  else if (element.work === 2) yellowsSum++;
  else if (element.work === 3) greensSum++;

  return {reds: redsSum, yellows: yellowsSum, greens: greensSum};

}

const shortRangeDate = new Date (`2022-05-11T15:31:36.955Z`)
console.log('Short Range Date:', shortRangeDate);
const element = {}

calculateCumulation(element, shortRangeDate)


module.exports = calculateCumulation;