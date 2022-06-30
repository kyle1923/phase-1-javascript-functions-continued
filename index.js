// code your solution here
function saturdayFun(message="roller-skate") {
    return `This Saturday, I want to ${message}!`
}
    
function mondayWork(message="go to the office") {
  
    return `This Monday, I will ${message}.`
}
    
function wrapAdjective(wrap = "*") {
    
    
    return function(word="special") {
        return `You are ${wrap}${word}${wrap}!`
    }  
}
