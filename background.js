function blahajifyRyan() {
    //document.body.style.backgroundColor = 'red';
    console.log("this!");
    var re = /(Ryan)/gi;
    var re2 = /(Swift)/gi;
    var re3 = /(Mary)/gi;
    
    let element = document.querySelectorAll('p, li, h1, h2, h3, h4, h5, h6, span, div');
    for(let i = 0; i < element.length; i++) {
        //console.log('this is h1!');
        //console.log(h1[i]);
        
        element[i].innerHTML = element[i].innerHTML.replace(re, "🦈");
        element[i].innerHTML = element[i].innerHTML.replace(re2, "🍉");
        element[i].innerHTML = element[i].innerHTML.replace(re3, "😻");
    }
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: blahajifyRyan
    });
});