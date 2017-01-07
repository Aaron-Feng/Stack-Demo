var createStack=function(){
	var stack=new Object();
	stack.size=0;
	stack.top=null;
	stack.push = function(number){
		var newNode=new createNode(number);
		if(stack.size==0){
			stack.top=newNode;
		}
		else{
			newNode.next=stack.top;
			stack.top=newNode;
		}
		stack.size++;
	};
	stack.pop=function(){
		var result=stack.top.element;
		stack.top=stack.top.next;
		stack.size--;
		return result;
	};
	stack.isEmpty=function(){
		if(stack.size==0)
			return true;
		else
			return false;
	};
	stack.peek=function(){
		var result=stack.top.element;
		return result;
	};

	stack.toString=function(){
		var result="";
		var current=stack.top;
		while(current!=null){
			result+=current.element+"\n";
			current=current.next;
		}
		return result;
	}
	return stack;
};

var createNode=function(number){
	var node=new Object();
	node.next=null;
	node.element=number;
	return node;
};
var stack=new createStack();

$('#stackPush').click(function(){
	var input=$('#inputNumber').val();
	if(input!=''){
		stack.push($('#inputNumber').val());
		$('#showStack').val(stack.toString());
		$('#showStep').val("Pushed number " + input +"\n" + $('#showStep').val());
	}
	else{
		$('#showStep').val("Can't push an empty input \n" + $('#showStep').val());
	}
});

$('#stackPop').click(function(){
	if(stack.isEmpty()){
		$('#showStep').val("Can't pop from an empty Stack \n" + $('#showStep').val());
	}
	else{
		var result=stack.pop();
		$('#showStep').val("Poped "+result+ "\n" + $('#showStep').val());
		$('#showStack').val(stack.toString());
	}
	
});

$('#stackPeek').click(function(){
	if(stack.isEmpty()){
		$('#showStep').val("Can't peek from an empty Stack \n" + $('#showStep').val());
	}
	else{
		var result=stack.peek();
		$('#showStep').val("Peek from stack: "+result+ "\n" + $('#showStep').val());
	}
});

$('#stackSize').click(function(){
	var result=stack.size;
	$('#showStep').val("Size of the stack: "+result+ "\n" + $('#showStep').val());
});

$('#stackEmpty').click(function(){
	if(stack.isEmpty())
		$('#showStep').val("The stack is empty. \n" + $('#showStep').val());
	else
		$('#showStep').val("The stack is NOT empty. \n" + $('#showStep').val());
});
$('#clearLog').click(function(){	
	$('#showStep').val(" ");
	return false;
});

$('#clearStack').click(function(){
	stack=new createStack();
	$('#showStack').val(stack.toString());
	$('#showStep').val("Stack Cleared \n" + $('#showStep').val());
});