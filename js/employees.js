let employeName=[];
const body=document.getElementsByTagName("BODY")[0];
const infirstName=document.getElementById("firstName");
const inlastName=document.getElementById("lastName");
const selgendName=document.getElementById("gendName");
const tabelName=document.getElementById("tableName")
const indexfirst = 1;

const homew1=document.getElementById("homew1");
const homew2=document.getElementById("homew2");
const homew3=document.getElementById("homew3");
const homew2Visib=document.getElementById("homew2Visib");

homew1.onclick = function() { 
    document.getElementById("page1").style.display="block";
    document.getElementById("page2").style.display="block";
    document.getElementById("homew2Visib").style.display="none";

}
homew2.onclick = function() { 
    document.getElementById("page1").style.display="none";
     
}
homew3.onclick = function() { 
    
    document.getElementById("page1").style.display="block";
    document.getElementById("homew2Visib").style.display="block";
    document.getElementById("page2").style.display="none";


}

const special=/[*|\":<>[\]{}`\\()';@&$1234567890]/;
infirstName.value=null;
inlastName.value=null;
const buttonAdd=document.getElementById("buttonAdd");


function Person(first, last, gen, ftitle, vsalary) {
    this.firstName = first;
    this.lastName = last;
    this.gendName = gen;
    this.titleName = ftitle;
    this.salaryValue = vsalary; 
     }
  
function texttojs (){

}
function addtable(objNames){

        let tbody = document.getElementById("tbody");
        let row = document.createElement('tr');
        let row_data_1 = document.createElement('td');
        row_data_1.innerHTML = objNames.firstName;
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = objNames.lastName;
       
        let row_data_3 = document.createElement('td');
            let btn = document.createElement('input');
            btn.type = "button";
            btn.className = "w3-button w3-ripple w3-red w3-right";
            btn.value="Delete";
            btn.onclick = function() {
            this.closest('tr').style.display="none";
            }
        row_data_3.appendChild(btn);
        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        row.appendChild(row_data_3);
        tbody.appendChild(row);
    
}
  
function listNames(){
    for (let valobj of employeName) { 
        addtable(valobj);
    }
}

function clickItem (){
    
    if (infirstName.value==="" || inlastName.value==="") {
        window.alert("Enter the First name and the last name!");
    }
    else{
        if(special.test(infirstName.value) || special.test(inlastName.value)) { 
            window.alert("Do not use numbers and special characters"); 
        }
        else{
            const empData = new Person (infirstName.value, inlastName.value, selgendName.value);
            employeName.push(empData);
            console.log(empData);
            
            for (let valobj of employeName) { 
                console.log(valobj.firstName);
            }
            addtable(empData);


            infirstName.value="";
            inlastName.value="";
        }
    }
}

buttonAdd.addEventListener("click", () => {
    clickItem();}

    
    );
