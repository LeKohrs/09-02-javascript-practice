var password = "Beanpole1";
var entry = prompt("Please enter the password."); 

for(var tries = 0; entry != password; tries++){
  entry = prompt("Please enter the CORRECT password."); 
}
