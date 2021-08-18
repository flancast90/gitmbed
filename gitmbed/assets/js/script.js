window.addEventListener('load', function(){
    var element =  document.getElementsByTagName("a");
    if (typeof(element) != 'undefined' && element != null)
    {
        for (var i = 0; i < element.length; i++) {
            if (element[i].href.includes("gitmbed=")) {
                var attributes =  (element[i].href).split("gitmbed=")[1];
                var attributes_toArray = attributes.split(",");
                element[i].outerHTML = `<iframe style="border:none;" src="`+sanitize_input(attributes_toArray[0])+`" width="`+sanitize_input(attributes_toArray[1])+`" height="`+sanitize_input(attributes_toArray[2])+`">Sorry, your browser doesn't seem to support embedded objects. :(</iframe>`;
            }
        }
    }else {
        console.log("Gitmbed found no objects to embed on this page :(");
    }
});

function sanitize_input(s) {
    return s.replaceAll('"',"").replaceAll("'","").replaceAll("<","").replaceAll(">","");
}

