for (var i = 0; i < 5; i++) {
    done(i);
}

function done(i){
    setTimeout(function () {
        console.log(i);
    }, 1000)
}