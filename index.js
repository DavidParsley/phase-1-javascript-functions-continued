// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
console.log(saturdayFun())

  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
} 

Example Calls

Here are some example calls for each function:

    Calling saturdayFun:

console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("hike")); // "This Saturday, I want to hike!"

Calling mondayWork:

console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

Calling wrapAdjective:

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); // "You are !!!a dedicated programmer!!!"
console.log(wrapAdjective("%")("a dedicated programmer")); // "You are %a dedicated programmer%!"

