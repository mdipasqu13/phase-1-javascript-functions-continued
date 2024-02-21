function saturdayFun(activity = "roller-skate") {
return `This Saturday, I want to ${activity}!`
}
const mondayWork = function(mondayActivity = "go to the office") {
return `This Monday, I will ${mondayActivity}.`
}


function wrapAdjective(flair = "*") {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
    
}

