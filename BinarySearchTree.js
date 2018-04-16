//Binary Search Tree
function BST(value){
  this.value=value;
  this.left=null;
  this.right=null;
}

//insert method
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
};
//contains method - it simply tell us if the vst contain given values
BST.prototype.contains = function(value){
   if(value === this.value)
      return true;
   else if(value < this.value){
      if(!this.left)
        return false;
      else
        return this.left.contains(value);
   }
   else if(value > this.value){
      if(!this.right)
        return false;
      else 
        return this.right.contains(value);
   }
};

//depth first traversal - inorder from least to greatest, preorder and postorder. preorder= 1st parent ->leftbranch -> right branch. postordder=leftChild, rightChild and finally parentNode
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

BST.prototype.getMinVal = function(){
   if(this.left) 
      return this.left.getMinVal();
   else
      return this.value;
}

BST.prototype.getMaxVal = function(){
   if(this.right)
     return this.right.getMaxVal();
    else
      return this.value;
}

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(105);
bst.insert(10);
//console.log(bst.right.left.left);
//console.log(bst.right.right);
//bst.depthFirstTraversal(log, 'post-order');
//bst.depthFirstTraversal(log, 'pre-order');
//bst.depthFirstTraversal(log, 'in-order');

//iteratorfunction
function log(value){
   console.log(value);
}

function logBST(node){
  console.log(node.value);
}
//console.log(bst.contains(599));

bst.breadthFirstTraversal(logBST);

console.log('min value in bst ', bst.getMinVal());

console.log('Max value in BST ', bst.getMaxVal());