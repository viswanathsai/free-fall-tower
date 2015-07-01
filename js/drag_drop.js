
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
//  document.getElementById("text").innerHTML=ev.target.id;
    var data = ev.dataTransfer.getData("text");
    
    dragSrcEl=ev.target;
   ev.dataTransfer.effectAllowed='move';
   ev.dataTransfer.setData("src",ev.target.src.substring(23,ev.target.src.length));
    
    ev.dataTransfer.setData("textNode", ev.target);
    if(ev.target.parentNode.id==="leftObjects")
        {
        callBubble("Place Object here...",120,70,-480,-403,0,33,0,0,26,0,"left");
        }
    if(ev.target.parentNode.id==="leftDestination")
        callBubble("Move Object to here...",110,70,-560,-295,0,60,0,0,20,2,"left");
    
    if(ev.target.parentNode.id==="rightObjects")
        callBubble("Place Object here...",110,70,-490,235,0,30,0,0,26,1,"left");
    if(ev.target.parentNode.id==="rightDestination")
        callBubble("Move Object to here...",110,70,-610,145,0,30,0,0,20,0,"left");

}
function drop(ev) {

if(ev.target.src!==undefined){
    console.log("src is not undefined")
    if(dragSrcEl.id.substring(dragSrcEl.id.length-4,dragSrcEl.id.length) === ev.target.id.substring(ev.target.id.length-4,ev.target.id.length) ){
        var tempId=dragSrcEl.id;
        dragSrcEl.src=ev.target.src.substring(23,ev.target.src.length);
        dragSrcEl.id=ev.target.id;
        ev.target.src=ev.dataTransfer.getData("src");
        ev.target.id=tempId;
        console.log(ev.target.id);
        console.log("DROPPED");
   }
   }
   else{
   console.log("src is undefined");
   ev.preventDefault();
   }
   var data = ev.dataTransfer.getData("text");

    console.log("data: "+data);
    var tar=ev.target.id;
    if(((tar==="foot-ball-left" || tar==="feather-left" || tar==="iron-ball-left" || tar==="golf-ball-left" )&&(data==="foot-ball-left" || data==="feather-left" || data==="iron-ball-left" || data==="golf-ball-left")) || ((tar==="foot-ball-right" || tar==="feather-right" || tar==="iron-ball-right" || tar==="golf-ball-right" )&&(data==="foot-ball-right" || data==="feather-right" || data==="iron-ball-right" || data==="golf-ball-right")) )
        {
        ;// do nothing. TO ENSURE NOT APPENDING ONE IMG TO ANOTHER IMG AS CHILD...
        console.log("woh ....");
        }
    else {
        if (data === "foot-ball-left" || data === "feather-left" || data === "iron-ball-left" || data === "golf-ball-left"){
            console.log("in 1");
            if(ev.target.id=="leftDestination" && document.getElementById("leftFinDestination").childNodes.length==0){
                if(document.getElementById("leftDestination").childNodes.length===1)                    // limiting one child in leftDestination
                    {
                    ev.target.appendChild(document.getElementById(data));
                    if(document.getElementById("leftDestination").childNodes[1]===undefined)
                        {
                        document.getElementById("sliderLeft").disabled=true;
                        }
                    else
                        {
                        if(document.getElementById("leftDestination").childNodes[1]) {
                            console.log("im in");
                            document.getElementById("leftDestination").childNodes[1].style.height = (100/35+40)+'px';
                            document.getElementById("leftDestination").childNodes[1].style.width = (100/35+40)+'px';
                            document.getElementById("leftDestination").childNodes[1].style.bottom="0px";
                            document.getElementById("leftDestination").childNodes[1].style.position="absolute";
                        }
                        callBubble("Increase or Decrease MASS and give object to MONKEY",201,105,-350,-345,0,50,27,0,15,0,"left");
                        document.getElementById("sliderLeft").disabled=false;
                        document.getElementById("sliderLeft").value=100;
                        leftMeterChange(document.getElementById("sliderLeft").value);
                //        document.getElementById("leftMass").value=100;
                        }
                    }
            }
            if(document.getElementById("leftDestination").childNodes[1] || document.getElementById("leftFinDestination").childNodes[0]){                                           if (ev.target.id==="leftFinDestination" && dragSrcEl.id===document.getElementById("leftDestination").childNodes[1].id)
                    ev.target.appendChild(document.getElementById(data));
                if (ev.target.id==="leftObjects")
                    ev.target.appendChild(document.getElementById(data));
                }
            if(ev.target.id==="leftObjects"){
                leftMeterChange(0);
                destroyBubble();
            }
//        var ob1=document.getElementById("drag1").setAttribute("draggable", false);  
//        var ob2=document.getElementById("drag2").setAttribute("draggable", false);
//        var ob3=document.getElementById("drag3").setAttribute("draggable", false);
//        var ob4=document.getElementById("drag4").setAttribute("draggable", false);
//        document.getElementById(data).setAttribute("draggable", true);
//       var target=((data==="drag1")?"drag1":((data==="drag2")?"drag2":((data==="drag3")?"drag3":"drag4")));
//    console.log("target: "+target);
//    var ob5=document.getElementById(ev.target.id).setAttribute("draggable",true);
//    console.log(document.getElementById("div1"));
//    var target=((data===ob1)?ob1:((data===ob2)?ob2:(data===ob3)?ob3:ob4));
        }
        else if (data === "foot-ball-right" || data === "feather-right" || data === "iron-ball-right" || data === "golf-ball-right"){
            if(ev.target.id=="rightDestination" && document.getElementById("rightFinDestination").childNodes.length==0 ){
                if(document.getElementById("rightDestination").childNodes.length===1){
                    ev.target.appendChild(document.getElementById(data));
                    if(document.getElementById("rightDestination").childNodes[1]===undefined)
                        {
                        document.getElementById("sliderRight").disabled=true;
                        }
                    else
                        {
                        if(document.getElementById("rightDestination").childNodes[1]) {
                            console.log("im in");
                            document.getElementById("rightDestination").childNodes[1].style.height = (100/35+40)+'px';
                            document.getElementById("rightDestination").childNodes[1].style.width = (100/35+40)+'px';
                            document.getElementById("rightDestination").childNodes[1].style.bottom="0px";
                            document.getElementById("rightDestination").childNodes[1].style.position="absolute";
                        }
                        callBubble("Increase or Decrease MASS and give object to MONKEY",200,105,-350,70,0,50,27,0,15,1,"left");
                        document.getElementById("sliderRight").disabled=false;
                        document.getElementById("sliderRight").value=100;
                        rightMeterChange(document.getElementById("sliderRight").value);
                //        document.getElementById("rightMass").value=100;
                        }
                }
            }
            if(document.getElementById("rightDestination").childNodes[1] || document.getElementById("rightFinDestination").childNodes[0]){                                           if (ev.target.id==="rightFinDestination" && dragSrcEl.id===document.getElementById("rightDestination").childNodes[1].id)
                    ev.target.appendChild(document.getElementById(data));
                if (ev.target.id==="rightObjects")
                    ev.target.appendChild(document.getElementById(data));
                }
            if(ev.target.id==="rightObjects"){
                rightMeterChange(0);
                destroyBubble();
            }
//        var ob11=document.getElementById("drag11").setAttribute("draggable", false);  
//        var ob22=document.getElementById("drag22").setAttribute("draggable", false);
//        var ob33=document.getElementById("drag33").setAttribute("draggable", false);
//        var ob44=document.getElementById("drag44").setAttribute("draggable", false);
//        document.getElementById(data).setAttribute("draggable", true);
        }
        else
            {;}
            
        }
    droppedObj=data;
    
    
    
    
    if((document.getElementById("leftFinDestination").childNodes[0]===undefined) && (document.getElementById("rightFinDestination").childNodes[0]===undefined))
        {
        document.getElementById("submit").disabled=true;
        }
    else
        {
        document.getElementById("submit").disabled=false;
        if (document.getElementById("rightFinDestination").childNodes[0]===undefined){
            if(document.getElementById("rightDestination").childNodes[1]===undefined)
                callBubble("Pick an Object to Weight",110,70,-620,215,0,33,0,0,20,1,"left");
            else
                callBubble("Increase or Decrease MASS and give object to MONKEY",200,105,-350,70,0,50,27,0,15,1,"left");
        }
        else if (document.getElementById("leftFinDestination").childNodes[0]===undefined){
            if(document.getElementById("leftDestination").childNodes[1]===undefined)
                callBubble("Pick an Object to Weight",120,70,-610,-363,0,30,0,0,26,0,"left");
            else
                callBubble("Increase or Decrease MASS and give object to MONKEY",201,105,-350,-345,0,50,27,0,15,0,"left");
        }
        else
            callBubble("Choose medium & Click on Drop",110,70,-646,-190,0,33,0,0,20,1,"left");
        }
    
    
    
    if(document.getElementById("leftDestination").childNodes[1]===undefined)
        document.getElementById("sliderLeft").disabled=true;
    else
        document.getElementById("sliderLeft").disabled=false;
    if(document.getElementById("rightDestination").childNodes[1]===undefined)
        document.getElementById("sliderRight").disabled=true;
    else
        document.getElementById("sliderRight").disabled=false;
    

    if(ev.target.id==="leftObjects")
        {
        document.getElementById(data).style.cssText="height: 50px; width: 50px;";
        }
    if(ev.target.id==="rightObjects")
        {
        document.getElementById(data).style.cssText="height: 50px; width: 50px;";
        }

}


