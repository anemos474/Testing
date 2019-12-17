var data        = [],
    formLines   = document.querySelectorAll('.forms__block input'),
    foormLabel  = document.querySelectorAll('.forms__block label'),
    edit        = false,
    indexCount  = null;

function adds(){
    var obj = {};
    for(let i = 0; i<formLines.length; i++){
        eval('obj.' + formLines[i].dataset.name + '="' +  formLines[i].value + '"');
        formLines[i].value = "";
    }
    if(edit){
       data[indexCount] = obj;
       edit = false;
    }else{
        data.push(obj);
    }
    render();
}

function render(){
    var tableLine  = "<tr>";
    for(let i = 0; i< foormLabel.length; i++){
        tableLine += `<td>${foormLabel[i].innerText}</td>`;
    };
    tableLine += `<td> </td></tr><tr>`

    for(let i = 0; i<data.length; i++){
        for( let key in data[i]){
            tableLine += `<td>${data[i][key]}</td>`   
        }
       
        tableLine += `<td onclick="redakt(${i})">✎</td></tr>`;
        result.innerHTML = tableLine;
    }
}    

function win(){
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      };
    var n           = randomInteger(0, data.length-1),
        textLine    = "";
        textLine = data[n].names +  " " + data[n].surname;
        winElem.value = textLine;
}

function redakt(index){
    let counter = 0;
    edit = true;
    indexCount = index;
    for( let key in data[index]){
        formLines[counter].value = data[index][key];
        counter++;
    }      
}