const adminRole = (role) => role === "admin";
console.log(adminRole('technician'));

let inheritedScope = {
    id:42,
    counter: function counter(){
        setTimeout(()=>{
            console.log(this.id);
        }, 1000)
    } 
}
console.log(inheritedScope);


// Scope
const userId = 42 //Global Scope

function globalFunction(){
    // Global Scope
    function localFunction(){
        // Local Scope
        // 2nd level scope
    }
}



