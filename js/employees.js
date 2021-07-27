let employeName=[];
const body=document.getElementsByTagName("BODY")[0];
const infirstName=document.getElementById("firstName");
const inlastName=document.getElementById("lastName");
const selgendName=document.getElementById("gendName");

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
            
            
            for (let valobj of employeName) { 
                console.log(valobj.firstName);
            }
        
            infirstName.value="";
            inlastName.value="";
        }
    }
}

buttonAdd.addEventListener("click", () => {
    clickItem();}

    
    );
