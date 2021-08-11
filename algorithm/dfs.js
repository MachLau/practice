//深度优先遍历
const deepTraversal1 = (node,nodeList)=>{
    if(node!=null){
        nodeList.push(node)
        const children = node.children;
        for (let i = 0; i < children.length; i++) {
            deepTraversal1(children[i],nodeList)
        }
    }
    return nodeList;
}
const deepTraversal2 = (node)=>{
        let nodes = [];
    if(node!=null){
        nodes.push(node)
        const children = node.children;
        for (let i = 0; i < children.length; i++) {
            nodes= nodes.concat(deepTraversal2(children[i]))   
        }
    }
    return nodes;
}
const deepTraversal3=(node)=>{
    let stack=[];
    let nodes=[];
    if(node){
        stack.push(node);
        while(stack.length){
            let item = stack.pop();
            nodes.push(item);
            let children = item.children;
            for(let i =children.length-1;i>=0;i--){
                stack.push(children[i]);
            } 
        }
    }
}