window.addEventListener('load', function(){
    var element =  document.getElementsByClassName("gitmbed");
    if (typeof(element) != 'undefined' && element != null)
    {
        for (var i = 0; i < element.length; i++) {
            var attributes =  document.getElementsByClassName("gitmbed")[i].dataset.gitmbed;
            var attributes_toArray = attributes.split(",");
            element[i].innerHTML = `<iframe style="border:none;" src="`+attributes_toArray[0]+`" width="`+attributes_toArray[1]+`" height="`+attributes_toArray[2]+`">Sorry, your browser doesn't seem to support embedded objects. :(</iframe>`;
        }
    }else {
        console.log("Gitmbed found no objects to embed on this page :(");
    }
});

