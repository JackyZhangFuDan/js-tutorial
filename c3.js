function variableDefinition(){
    //用var定义for循环的循环变量,那么该变量在循环后还有存在
    for (var i = 0; i < 10; i++){
        setTimeout(() => { //延迟打印的话i值一直是循环变量的最后一个值
            console.log(i);
        }, 10);
    }
    console.log("var i is still available after the for-loop: ", i);
    
    //用let定义for循环的循环变量则不然
    for (let j = 0; j < 10; j++){
        setTimeout(() => { //延迟打印的话j值会正确体现当时循环变量的值
            console.log(j);
        }, 10);
    }
    try{
        console.log(j);
    }catch(e){
        console.log("let j is NOT available after the for-loop");
    }
}

variableDefinition();