let todo=[];

let req=prompt("Please enter your request ");


while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
    }
    else if(req=="add"){
        let task=prompt("please enter the task you wanna add ");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let index=prompt("Please enter the selected task's index");
        todo.splice(index,1);
        console.log("Task is deleted")
    }
    else{
        console.log("Wrong request");
    }

    req=prompt("Please enter your request");
}