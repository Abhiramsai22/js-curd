// Scenario 1: Online Food Delivery

console.log("Zomato customer ordered")
function orderRecivied(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Ordered Recivied")
        },1000)
    })
}
function preparingfood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Food prepared")
        },3000)
    })
}
function packingfood(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Food is packed")
        }, 2000);
    })
}
function assigndelivery(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Food is assigned to a delivery boy")
        }, 2000);
    })
}
function deliveryingfood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Food is delivered")
        })
    })
}

orderRecivied()
.then(res=>{
    console.log(res);
    return preparingfood();
}).then(res=>{
    console.log(res);
    return packingfood();
}).then(res=>{
    console.log(res);
    return assigndelivery();
}).then(res=>{
    console.log(res);
    return deliveryingfood();
}).then(res=>{
    console.log(res);
}).catch(err => console.error(err));


// Scenario 2: Movie Ticket Booking


console.log("Movie Ticket booking system")
function Selectingseats(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("selected seats")
        },2000)
    })
}
function Processingpayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("payment is processed")
        },3000)
    })
}
function Generatingticket(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Ticket is generated")
        }, 1000);
    })
}
function Sendingconfirmationemail(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("conformation email was sent")
        }, 2000);
    })
}

Selectingseats()
.then(res=>{
    console.log(res);
    return Processingpayment();
}).then(res=>{
    console.log(res);
    return Generatingticket();
}).then(res=>{
    console.log(res);
    return Sendingconfirmationemail();
}).then(res=>{
    console.log(res);
}).catch(err => console.error(err));

// Scenario 3: Car Service Center

console.log("Car servicing system")
function Carcheckin(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Car check-in completed")
        },1000)
    })
}
function Oilchange(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Oil is changed")
        },2000)
    })
}
function Enginecheck(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Engine is checked")
        }, 3000);
    })
}
function Carwash(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Car is washed")
        }, 2000);
    })
}
function finalqualitycheck(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Final quality is also checked")
        },2000)
    })
}

Carcheckin()
.then(res=>{
    console.log(res);
    return Oilchange();
}).then(res=>{
    console.log(res);
    return Enginecheck();
}).then(res=>{
    console.log(res);
    return Carwash();
}).then(res=>{
    console.log(res);
    return finalqualitycheck();
}).then(res=>{
    console.log(res);
}).catch(err => console.error(err));


//Scenario 4: Laptop Repair Service


console.log("Laptop Repair Service")
function Diagnosingissue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Diagnosing issue solved")
        },3000)
    })
}
function Replacingfaultyparts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Faulty parts are replaced")
        },4000)
    })
}
function Updatingsoftware(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Software is updated")
        }, 2000);
    })
}
function Finaltesting(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Final test is done")
        }, 2000);
    })
}
function Returningtocustomer(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Returned to customer")
        },1000)
    })
}

Diagnosingissue()
.then(res=>{
    console.log(res);
    return Replacingfaultyparts();
}).then(res=>{
    console.log(res);
    return Updatingsoftware();
}).then(res=>{
    console.log(res);
    return Finaltesting();
}).then(res=>{
    console.log(res);
    return Returningtocustomer();
}).then(res=>{
    console.log(res);
}).catch(err => console.error(err));


//Scenario 5: Online Course Enrollment


console.log("Student is enrolling in an online course")
function Checkingcourseavailability(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Course is available")
        },1000)
    })
}
function Processingpayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("payment is processed sucessfully")
        },3000)
    })
}
function GeneratingenrollmentID(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Enrolment ID is generated")
        }, 1000);
    })
}
function Sendingcoursematerials(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Course materials is sended")
        }, 2000);
    })
}
function Grantingaccesstoliveclasses(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Access is granted to live classes")
        },2000)
    })
}

Checkingcourseavailability()
.then(res=>{
    console.log(res);
    return Processingpayment();
}).then(res=>{
    console.log(res);
    return GeneratingenrollmentID();
}).then(res=>{
    console.log(res);
    return Sendingcoursematerials();
}).then(res=>{
    console.log(res);
    return Grantingaccesstoliveclasses();
}).then(res=>{
    console.log(res);
}).catch(err => console.error(err));

