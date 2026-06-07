function addStudent(){

    let name = document.getElementById("name").value;
    let maths = Number(document.getElementById("maths").value);
    let science = Number(document.getElementById("science").value);
    let english = Number(document.getElementById("english").value);

    if(name === "" || maths === 0 || science === 0 || english === 0){
        alert("Please fill all fields");
        return;
    }

    let total = maths + science + english;
    let percentage = (total / 300) * 100;

    let grade = "";

    if(percentage >= 90){
        grade = "A+";
    }
    else if(percentage >= 75){
        grade = "A";
    }
    else if(percentage >= 60){
        grade = "B";
    }
    else if(percentage >= 40){
        grade = "C";
    }
    else{
        grade = "Fail";
    }

    let table = document.getElementById("resultBody");

    let row = `
        <tr>
            <td>${name}</td>
            <td>${maths}</td>
            <td>${science}</td>
            <td>${english}</td>
            <td>${total}</td>
            <td>${percentage.toFixed(2)}%</td>
            <td>${grade}</td>
        </tr>
    `;

    table.innerHTML += row;

    document.getElementById("name").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("science").value = "";
    document.getElementById("english").value = "";
}