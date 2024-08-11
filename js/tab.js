function getElementIndex(node) {
    let children = Array.from(node.parentElement.children); // Convert HTMLCollection to Array
    return children.indexOf(node); // Get index of the element
}

function getChildrenNode(node) {
    while(node.parentElement.querySelector(".tab-content") == null) {
        node=node.parentElement;
    }
    return node.parentElement.querySelector(".tab-content").children;
}

function activateTab(node) {
    let colorClass="bg-ground";
    node.parentElement.querySelector(`.${colorClass}`).classList.remove(colorClass); 
    node.classList.add(colorClass);

    let childrenNode=getChildrenNode(node);
    let children = Array.from(childrenNode); 
    let activeTab= children.find(element => !element.classList.contains("hide")); // Old Tab
    
    let nodeIndex=getElementIndex(node);
    let newTab=childrenNode[nodeIndex];
    if (newTab != activeTab) switchTab(activeTab,newTab);
} 

function switchTab (activeTab,newTab) {
    newTab.classList.remove("hide");
    activeTab.classList.add("opacity");
    setTimeout(() => {
        newTab.classList.remove("opacity");
        setTimeout(() => {
            activeTab.classList.add("hide");
    
        },250);
    },50);
}