function akaned(){
    event.preventDefault();
    var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    //  0         1           2           3           4           5           6
    var maleAkanName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
                    //      0       1           2       3       4       5       6
    var femaleAkanName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
                    //       0         1       2       3       4       5       6

    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = document.getElementById("year").value;
    var gender = document.getElementById("gender").value;
    var date = new Date(year +"/" + month + "/"+day);
    var actualBirthDay = date.getDay();                       
    var akanDay = dayOfWeek[actualBirthDay];     
    var invalidMonth = ( month<1 || month>12 || ((document.getElementById("month").value)=="") );        
    var invalidDay = ( day<1 || day>31 || ((document.getElementById("day").value)=="") );                 
    var invalidYear = (  year<1 || ( year>( new Date().getFullYear() ) ) || ((document.getElementById("year").value)=="") );
    var invalidGender = ( (gender=="selectdefault") );
    var invalidAll = ((invalidDay==true)&&(invalidMonth==true)&&(invalidYear==true)&&(invalidGender==true));
    var validFemale = ((invalidDay==false)&&(invalidMonth==false)&&(invalidYear==false)&&(gender==="Female")); 
    var validMale = ((invalidDay==false)&&(invalidMonth==false)&&(invalidYear==false)&&(gender==="Male"));
    var febDates = ( ((month===2)&&(day==30)) || ((month===2)&&(day==31)) );
    var aprJune =  ( ((month===4)&&(day==31)) || ((month===6)&&(day==31)) );
    var septOct =  ( ((month===9)&&(day==31)) || ((month===11)&&(day==31)) );
    if ( invalidAll==true ) {
     document.getElementById('result').textContent = "*ENTER DETAILS!";
     document.getElementById("result").style.color = "red";
     document.getElementById("resultintro").style.display = "none";
    }
   else if( invalidDay==true) {  
     document.getElementById('result').textContent = "*Please enter a Valid Day Number from 1 - 31";
     document.getElementById("result").style.color = "red";      
     document.getElementById("resultintro").style.display = "none";
   }
   else if ( invalidMonth==true ) {
     document.getElementById('result').textContent = "*Please enter a Valid Month Number from 1 - 12";
     document.getElementById("result").style.color = "red";
     document.getElementById("resultintro").style.display = "none";
    }
   else if ( invalidYear==true ) {
     document.getElementById('result').textContent = "*INVALID YEAR";
     document.getElementById("result").style.color = "red";
     document.getElementById("resultintro").style.display = "none";
    }
   else if ( invalidGender==true ) {
     document.getElementById('result').textContent = "*SELECT GENDER";
     document.getElementById("result").style.color = "red";
     document.getElementById("resultintro").style.display = "none";
     }
   else if ( (febDates==true) || (aprJune==true) ||(septOct==true) ) {
     document.getElementById('result').textContent = "*SELECT AN EXISTING DATE.";
     document.getElementById("result").style.color = "red";
     document.getElementById("resultintro").style.display = "none";
     }
   else if ( validFemale==true ) {
     document.getElementById('result').textContent = "You were born on "+ akanDay+ " and your Akan name is " +femaleAkanName[actualBirthDay];
     document.getElementById("result").style.color = "green";     
     document.getElementById("resultintro").style.display = "none";
    }
   else if ( validMale==true) {
     document.getElementById('result').textContent = "You were born on "+ akanDay+ " and your Akan name is " +maleAkanName[actualBirthDay];
     document.getElementById("result").style.color = "green";    
     document.getElementById("resultintro").style.display = "none";
    }
   else {
     alert("Whoops!! We can not compute your details SORRY!!");
    }

}