console.log('1111111')



var anchors = document.getElementsByTagName('div');
for(var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    anchor.onclick = function() {
        console.log('hi');
    }
}