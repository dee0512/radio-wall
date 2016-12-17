

function init(){
    var container = document.getElementById('container');
    var containerHeight = container.offsetHeight;
    var containerWidth = container.offsetWidth;
    var x = containerWidth / 24;
    var y = containerHeight / 24;
    var arr = [];
    var htmlText = '';
    for(var i = 0; i < x; i++){
        arr[i]= [];
        for(var j =0; j < y; j++){
            arr[i][j]= 'r' + (i*x) + j;
            htmlText = htmlText +
                '<div class="radio">'+
                '<input type="radio" id="'+arr[i][j]+'">'+
                '<label class="radio-label" for="'+arr[i][j]+'"></label>'+
                '</div>';
        }
    }
    console.log( x, y);
    container.innerHTML = htmlText;
}

init();