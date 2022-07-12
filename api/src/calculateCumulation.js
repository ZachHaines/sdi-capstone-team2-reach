


const calculateCumulation = (element, months) => {
  const surveyDate = new Date(element.survey_date)
  // console.log(element.survey_date);

  const compareDate = new Date();
  compareDate.setMonth(compareDate.getMonth() - months) 

  // console.log('compare date', compareDate)
  
  // sum calculation
  let redsSum = 0;
  let yellowsSum = 0;
  let greensSum = 0;

  // if surveyDate is earlier than the compareDate, then return all 0's
  if(testDate(surveyDate, compareDate))
    return {reds: redsSum, yellows: yellowsSum, greens: greensSum};

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

const testDate = (msgDate, compareDate) => {
  const result = ( msgDate < compareDate);
  return result;  
}

const msgDate = new Date (`2022-03-12T15:31:36.955Z`)
const compareDate = new Date();
compareDate.setMonth(compareDate.getMonth() - 3)

testDate (msgDate, compareDate);


module.exports = calculateCumulation;