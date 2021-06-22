let form =document.getElementById("form")
let table= document.getElementById("table")
let status
let status2


function students(name,course,grade){
    this.name=name;
    this.course=course
    this.grade=grade;
    students.all.push(this)


}

students.all=[]
header()
Render_on_load()


form.addEventListener("submit",handelsubmit)


function handelsubmit(event){
    event.preventDefault()
    let name=event.target.name.value
    let course=event.target.course.value
    let grade=random()
    x= new students(name,course,grade)
    x.render()
    saving()


}


function random(){
    return Math.floor(Math.random() * (100 - 1) + 1);
}

function header(){
    let tr1=document.createElement("tr")
    table.appendChild(tr1)
    let th1=document.createElement("th")
    let th2=document.createElement("th")
    let th3=document.createElement("th")
    let th4=document.createElement("th")
    tr1.appendChild(th1)
    tr1.appendChild(th2)
    tr1.appendChild(th3)
    tr1.appendChild(th4)
    th1.textContent="Student name"
    th2.textContent="Student Grade"
    th3.textContent="Student course"
    th4.textContent="Student status"

}

students.prototype.render=function(){
    let tr2=document.createElement("tr")
    table.appendChild(tr2)
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")
    let td4=document.createElement("td")
    tr2.appendChild(td1)
    tr2.appendChild(td2)
    tr2.appendChild(td3)
    tr2.appendChild(td4)
    td1.textContent=`${this.name}`
    td2.textContent=`${this.course}`
    td3.textContent=`${this.grade}`
    if(this.grade >= 50){
        status="Success"

    }
    else if(this.grade<50){
        status="Fail"
    }
    td4.textContent=`${status}`



}

function Render_on_load(){
    get()
    for(let i=0;i<students.all.length;i++){
        let tr3 =document.createElement("tr")
        table.appendChild(tr3)
    let td21=document.createElement("td")
    let td22=document.createElement("td")
    let td23=document.createElement("td")
    let td24=document.createElement("td")
    tr3.appendChild(td21)
    tr3.appendChild(td22)
    tr3.appendChild(td23)
    tr3.appendChild(td24)
    td21.textContent=`${students.all[i].name}`
    td22.textContent=`${students.all[i].course}`
    td23.textContent=`${students.all[i].grade}`
    if(students.all[i].grade >= 50){
        status2="Success"

    }
    else if(students.all[i].grade<50){
        status2="Fail"
    }
    td24.textContent=`${status2}`





    }
}




function saving(){
    localStorage.setItem("infos", JSON.stringify(students.all));
}

function get(){
    users = JSON.parse(localStorage.getItem("infos") );
    if(users !=null){
        students.all=users
    }
}