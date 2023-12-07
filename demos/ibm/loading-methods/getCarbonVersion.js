let carbonVersion = document.getElementsByName('carbonJsVersion')[0].content;
let carbonElements = new Array();

function includeCarbonScriptElement(webComponentName){
    webComponentName.forEach(function (item, index) {
        if(!containsObject(item, carbonElements)){
          carbonElements.push(item);
          var scriptElement = document.createElement('script');
          scriptElement.src = "https://1.www.s81c.com/common/carbon-for-ibm-dotcom/version/"+carbonVersion+"/"+item+".min.js";
          scriptElement.type = "module";
          document.body.appendChild(scriptElement);
        }
    });
}

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
 	}
}
