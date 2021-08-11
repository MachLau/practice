// 广度优先遍历
const widthTraversal=(node)=>{
    let nodes=[];
    let queue=[];
    if(node){
        queue.push(node);
        while(queue.length){
            let item = queue.shift();
            nodes.push(item);
            let children = item.children;
            for(let i=0;i<children.length;i++){
                queue.push(children[i]);
            }
        }
    }
    return nodes;
}