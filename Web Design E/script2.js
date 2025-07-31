//prompt("Enter any value to continue")
         function valid(){
            var nemu=document.getElementById('us').Value;
            var password=document.getElementById('pas').value;
            if(password==123){
                document.write('<a href="Thursday_20.html">Click Here</a>');
            }
            else{
                alert("Please Enter correct password to continue");
            }
         }
         function Total(){
            var act=parseInt(document.getElementById('class').Value);
            var term=parseInt(document.getElementById('mid').value);
            var final=parseInt(document.getElementById('fin').value);
            var Total=act+term+final;
            document.write(Total);
         }
         function Avarage(){
            var act=parseInt(document.getElementById('class').Value);
            var term=parseInt(document.getElementById('mid').value);
            var final=parseInt(document.getElementById('fin').value);
            var Ave=(act+term+final)/3;
            document.write(Ave);
         }