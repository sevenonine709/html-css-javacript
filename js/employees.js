let employeName=[];
const body=document.getElementsByTagName("BODY")[0];
const infirstName=document.getElementById("firstName");
const inlastName=document.getElementById("lastName");
const selgendName=document.getElementById("gendName");
const tabelName=document.getElementById("tableName")
const indexfirst = 1;

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
  
function addtable(objNames){

        let tbody = document.getElementById("tbody");
<<<<<<< HEAD
      
=======
     
>>>>>>> d3f7567b98065d30336f9d1a52cf3451e4e0c084
        let row = document.createElement('tr');
        let row_data_1 = document.createElement('td');
        row_data_1.innerHTML = objNames.firstName;
        let row_data_2 = document.createElement('td');
<<<<<<< HEAD
        row_data_2.innerHTML = objNames.lastName;
=======
        row_data_2.innerHTML = objNaes.lastName;
>>>>>>> d3f7567b98065d30336f9d1a52cf3451e4e0c084
        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        tbody.appendChild(row);
    
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
