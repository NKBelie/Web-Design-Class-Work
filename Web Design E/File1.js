
       // var pass=prompt("Enter password to continue");
        if(pass=="Peter"){
        var a=20;
        var b=10;
        var prod=a*b;
        document.write(prod);
        }
        else{
            alert("you have entered incorrect Password");
        }
        function Check(){
            document.getElementById('day').innerHTML='Mastering Javascript';
        }
        function Calcul(){
            var act=document.getElementById('Class').value ;
            var midd=document.getElementById('mid').value ;
            var finn=document.getElementById('fin').value ;
            var Product=act*midd*finn;
            document.write(Product);
        }
