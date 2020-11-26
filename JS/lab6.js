function work(userinput){
    let myArr = [{code: "ACIT 1620", name: "Web Fundamental Technologies"},{code: "ACIT 1515", name: "Scripting for IT"},{code: "ACIT 1630", name: "Database System"}];
    let check = true;
    for(let item of myArr){
        let count = 0;
        if(item.code.includes(userinput)){
            console.log("Yes I am taking the course: " + item.code + "–" + item.name);
            check = true;
            break;
        }
        else{
            check = false;
        }
    }
    if(check == false){
        myArr.push({code: userinput, name: null});
        console.log(myArr);
        console.log("Successful add userinput to the array");
    }
}


function main(){
    var user = prompt("Please enter the 4 digits code of your course: ");
    while(user.length !== 4){
        var user = prompt("Please enter the 4 digits code of your course: ");
    }
    work(user);
}


main()