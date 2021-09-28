function colour() {
    let col2 = 'red';
    const col3 = 'yellow';

    //
    setInterval(function() {

        
        //model care functioneaza de var
        if (document.getElementById('var').style.color == 'black')
            var col1 = 'blue';
        else
            col1 = 'black';

        //model care nu functioneaza de let
        if (document.getElementById('let1').style.color == 'black') {
           let colVarFail = 'red';
        } else {
            colVarFail = 'black';
        }

         //model care functioneaza de let
        if (document.getElementById('let2').style.color == 'black') {
            col2 = 'red';
         } else {
              col2 = 'black';
         }

        // schimbarea culorilor din html
        document.getElementById('var').style.color = col1;
        document.getElementById('let2').style.color = col2;

        // valoarea la const nu se poate modifica
        document.getElementById('const').style.color = col3;
        
        //model in care nu fuctioneaza, deoarece nu putem accesa variabila colVarFail
        document.getElementById('let1').style.color = colVarFail;

        
    }, 500)
}
