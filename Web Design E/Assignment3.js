           function Total(){
            var wor=parseFloat(document.getElementById('work').value);
            var midd=parseFloat(document.getElementById('mid').value);
            var finn=parseFloat(document.getElementById('final').value);
            var tot=wor+midd+finn;
           // alert(tot);
            document.getElementById('tr').value=tot;
           }
           function average(){
            var wor=parseFloat(document.getElementById('work').value);
            var midd=parseFloat(document.getElementById('mid').value);
            var finn=parseFloat(document.getElementById('final').value);
            var Avarage=(wor+midd+finn)/3;
            //alert(Avarage);
            document.getElementById('ar').value=Avarage;
           }
           function grade(){
            var wor=parseFloat(document.getElementById('work').value);
            var midd=parseFloat(document.getElementById('mid').value);
            var finn=parseFloat(document.getElementById('final').value);
            var tot=wor+midd+finn;
            if(tot>=70){
                //alert('A');
                document.getElementById('gr').value="A";
            }
            else if(tot>=60) {
                //alert('B');
                document.getElementById('gr').value="B";
            }
            else if(tot>=50) {
               // alert('C');
               document.getElementById('gr').value="C";
            }
            else if (tot<50) {
               // alert('Failed');
               document.getElementById('gr').value="Failed";
            }
           }