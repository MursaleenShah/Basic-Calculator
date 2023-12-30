var buttons = document.querySelectorAll(".button");
var display = document.getElementById("display");
var clear = document.getElementById("clear");
var discard = document.getElementById("delete");
var equal = document.getElementById("equal");


buttons.forEach(button => {
    button.addEventListener("click", function() {
        var buttonValue = button.value;
        display.value += buttonValue;
    });
});


clear.addEventListener("click",function()
{
    display.value = '';
    //document.getElementById('display').value = displayValue;
});

discard.addEventListener("click",function()
{
   
   // document.getElementById('display').value =
    display.value = display.value.toString().slice(0,-1);
    
});

equal.addEventListener("click",function()
{
   // document.getElementById('display').value = 
   try 
   {
    if(display.value == "")
    {
        display.value = "";
    }
    else
    display.value = eval(display.value);
   }
   catch(error)
   {
    document.getElementById('display').value = 'Error';
   }


});

