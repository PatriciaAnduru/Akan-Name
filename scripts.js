
  function practice() {
     var gscore;
     var score = document.getElementById('grade').value
     switch(true) {
     
  case (score <= 100 && score >= 80):
   gscore = 'A';
    break;	
   
   case (score <=79 && score >= 60):
   gscore = 'B';
   break;
   
   case (score <=59 && score >= 40):
   gscore = 'C';
   break;
   
   case (score <=39 && score >= 20):
   gscore = 'D';
   break;
   
   case (score <=19 && score >= 0):
   gscore = 'E';
   break;
   
   case(score > 100):
   gscore = 'INVALID GRADE';
   break;
   
   case(score <0):
   gscore = 'GO BACK TO SCHOOL';      
    break;
    
default:
  return "ooops!! not in the grading system";
   }
    document.getElementById('grades').innerHTML=gscore;
   }
 