// Function declaration: saturdayFun
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function expression: mondayWork
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // Function definition: wrapAdjective
  function wrapAdjective(flair = '*') {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  // code your solution here
