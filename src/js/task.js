var tasks = [];

function idGenerator() {
    var timestamp = new date();

    var id = 
        timestamp.getHours().toString() + 
        timestamp.getMinutes().toString() + 
        timestamp.getSeconds().toString() + 
        timestamp.getMilliseconds().toString();

        return id;
}

function createtask() {
    var taskDescription = document.getElementById("newTask").value

    var task = {
        id: idGenerator(),
        data: {
            description: taskDescription
        },
    };

    tasks.push(task);

    updateScreen();
}

function updateScreen() {
    var list = "<ul>";
    
    tasks.forEach(task => {
        list += "<li id-data=" + task.id + ">" + task.data.description + "</li>"
        list += 
            "<button onclick=deleteTask id-data=" + task.id + ">Apagar</button>" 
    });
    
    list += "</ul>";


    document.getElementById("list").innerHTML = list;
    document.getElementById(newTask).value = " ";
}

function deleteTask(element){
    console.log (element)
}

