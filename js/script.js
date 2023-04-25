//movie ticket calc

//button code

document.querySelector("#calcTicketPrice").addEventListener("click",function(e){
    if(document.querySelector("#age").reportValidity() &&
    document.querySelector("#timeHours").reportValidity() &&
    document.querySelector("#timeMin").reportValidity()){

        //get values
        let age= document.querySelector("#age").value;
        let timeHr = document.querySelector("#timeHours").value;
        let timeMin = document.querySelector("#timeMin").value;

        //create variable to hold ticket price

        let ticketPrice = 12;

        //create a conditional to figure out ticket price

        if(age >= 55 || age<10){
            //person gets discount
            ticketPrice=7;
            //final results based on age
            document.querySelector("#ticketPrice").innerHTML=`You get the discount because of your age! the ticket is $${ticketPrice.toFixed(2)}.`; 
        }
        else if((timeHr >= 2 && timeHr<=6) && document.querySelector("#pm").checked){
            //they get a discount based on time
            ticketPrice=7.00;
            document.querySelector("#ticketPrice").innerHTML=`You get the discount because of your movie's time! the ticket is $${ticketPrice.toFixed(2)}.`; 
        }
        else{
            //no discounts
            //full price
            document.querySelector("#ticketPrice").innerHTML=`The ticket is $${ticketPrice.toFixed(2)}.`; 
        }
    }
});
