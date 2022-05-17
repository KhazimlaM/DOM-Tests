function billWIthSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;
    var totalCost = 0;
   
    function setCallCost(cost){
        theCallCost = cost;
        
    }
    function getCallCost(){
        return theCallCost;
    }

    function setSmsCost(cost){
        theSmsCost = cost;
    }

    function getSmsCost(){
         return theSmsCost;
    }

    function setCriticalLevel(amount){
        theCriticalLevel = amount;
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function setWarningLevel(amount){
        theWarningLevel = amount;
    }
     
    function getWarningLevel(){
        return theWarningLevel;
    }

    function makeCall(){
        if(!hasReachedCriticalLevel()){
            callCostTotal += theCallCost;
        }
    }

    function sendSms(){
        if(!hasReachedCriticalLevel()){
            smsCostTotal += theSmsCost;
        } 
    }

    function getTotalCost(){
        totalCost = callCostTotal + smsCostTotal;
        return totalCost.toFixed(2)
    }

    function getTotalCallCost(){
        return callCostTotal.toFixed(2);
    }

    function getTotalSmsCost(){
        return smsCostTotal.toFixed(2);
    }

    function hasReachedCriticalLevel(){
        return getTotalCallCost() >= getCriticalLevel();
    }

    function totalClassName(){
        if(hasReachedCriticalLevel()){
            return "critical";
        }

        if(getTotalCost() >= getWarningLevel()){
            return "warning";
        }
    }

   
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setCriticalLevel,
        getCriticalLevel,
        setWarningLevel,
        getWarningLevel,
        makeCall,
        sendSms,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        totalClassName,
        hasReachedCriticalLevel
    }
}