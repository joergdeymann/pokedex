async function loadScreen(percent, animationTime=2000) {
    let deg=calcDeg(percent);
    let {degPrev, degRight, animationDuration} = getCurrentTransformValues(animationTime,deg);
    
    if (isTransitionNeeded(deg,degPrev)) {
        await loadScreen(50,animationTime);
        degPrev=180;
        animationDuration=calcAnimationDuration(deg,degPrev,animationTime);
    } 
    
    loadScreenOpacity(deg,degPrev);
    await loadScreenRotate(deg,degRight,animationDuration);  
}

function calcDeg(percent) {
    return Math.round(360*percent/100,0);
}

function calcAnimationDuration(deg,degPrev,animationTime) {
    return Math.round(animationTime*(Math.abs(degPrev - deg))/360);
}

function getCurrentTransformValues(deg,animationTime) {
    let transformR=document.getElementById("load-rightcircle").style.transform;
    let transformL=document.getElementById("load-leftcircle").style.transform;
    let degPrev, degRight, animationDuration = 0;

    try  {
        degPrev = +(transformL.match(/[0-9]+/g))[0];
        animationDuration= calcAnimationDuration(deg,degPrev,animationTime);
        degRight = +(transformR.match(/[0-9]+/g))[0];
    }  catch(error) {}

    return {degPrev,degRight,animationDuration};
}

function isTransitionNeeded(deg,degPrev) {
    return (degPrev <180 && deg>180) || (degPrev >180 && deg<180);
}

async function loadScreenRotate(deg,degRight,animationDuration) {    
    document.getElementById("load-leftcircle").style.transform=`rotate(${deg}deg)`;
    document.getElementById("load-leftcircle").style.transition=`${animationDuration}ms linear`;
    document.getElementById("load-rightcircle").style.transition=`${animationDuration}ms linear`;
    if (deg < 180) {
        document.getElementById("load-rightcircle").style.transform=`rotate(${deg}deg)`;
    } else 
    if (degRight <180 && degRight<=deg) {
        document.getElementById("load-rightcircle").style.transform=`rotate(${Math.min(deg,180)}deg)`;
    }
    await new Promise(r => setTimeout(r, animationDuration));
}

function loadScreenOpacity(deg,degPrev) {
    let opacity=1;
    if (deg > 180 || degPrev >180) opacity=0;
    document.getElementById("load-mask").style.opacity=opacity;
}

function toggleLoadScreen() {
    document.getElementById("pokeball").classList.toggle("hide");
}