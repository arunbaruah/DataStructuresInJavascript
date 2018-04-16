//bst
function BST(value){
  this.value = value;
  this.left = null;
  this.right =null;
}
//insert
BST.prototype.insert = function(value){
  if(value <=this.value){
    if(!this.left)
       this.left = new BST(value);
    else
       this.left.insert(value);
  }
  else if(value >this.value){
    if(!this.right)
       this.right = new BST(value);
    else
       this.right.insert(value);
  }
}
//contains
BST.prototype.contains = function(value){
  if(value ===this.value)
    return true;
  else if(value <this.value){
    if(!this.left)
      return false;
    else
     return this.left.contains(value);
  }
  else if(value >this.value){
    if(!this.right)
      return false;
    else
      return this.right.contains(value);
  }
}
//dfs - inorder means we touch leftNode ->parentNode ->rightNode in order from least to greatest.
BST.prototype.depthFirstTraversalInorder = function(iteratorFunc){
  if(this.left) //left node
     this.left.depthFirstTraversalInorder(iteratorFunc); 
     iteratorFunc(this.value); //parent node
  if(this.right) //right node
     this.right.depthFirstTraversalInorder(iteratorFunc);
};

//dfs - preorder means we touch parentNode ->leftNode ->rightNode. This is useful to make a copy of the tree
BST.prototype.depthFirstTraversalPreorder = function(iteratorFunc){
  iteratorFunc(this.value); //parent node
  
  if(this.left) //left node
     this.left.depthFirstTraversalInorder(iteratorFunc); 
    
  if(this.right) //right node
     this.right.depthFirstTraversalInorder(iteratorFunc);
};

//dfs - postorder means we touch leftNode ->RightNode ->ParentNode. This is useful to safely delete a nodes from the binary tree because it starts at the lowest level
BST.prototype.depthFirstTraversalPostorder = function(iteratorFunc){
  if(this.left) //left node
     this.left.depthFirstTraversalInorder(iteratorFunc); 

  if(this.right) //right node
     this.right.depthFirstTraversalInorder(iteratorFunc);

     iteratorFunc(this.value); //parent node  
};

//We can also modify the DFS function by passing order and with a few if conditions so that we can use this single method to pass any order
BST.prototype.depthFirstTraversal = function(iteratorFunc, order){
  if(order ==='pre-order')
     iteratorFunc(this.value);
  if(this.left) //first on left child
     this.left.depthFirstTraversal(iteratorFunc, order);
  if(order === 'in-order') 
        iteratorFunc(this.value); //on parent node
  if(this.right) //on right child
     this.right.depthFirstTraversal(iteratorFunc, order);
  if(order ==='post-order')
    iteratorFunc(this.value);
};

//breadthFirst Search traversal - level by level search.
BST.prototype.breadthFirstTraversal = function(iteratorfunc)
{
  var queue =[this]; //root node of our bst
  while(queue.length){
    var treeNode = queue.shift();//first node out of our queue
    iteratorfunc(treeNode);
    if(treeNode.left)
       queue.push(treeNode.left);
    if(treeNode.right)
       queue.push(treeNode.right);

  }
}

function log(value){
  console.log(value);
}
function logFunc(node){
  console.log(node.value);
}

var bst = new BST(50);
bst.insert(70);
bst.insert(25);
bst.insert(55);

//bst.depthFirstTraversalInorder(log);
//bst.depthFirstTraversalPreorder(log);
//bst.depthFirstTraversalPostorder(log);
//bst.depthFirstTraversal(log, 'post-order');
//bst.depthFirstTraversal(log, 'in-order');
//bst.depthFirstTraversal(log, 'pre-order');

bst.breadthFirstTraversal(logFunc);