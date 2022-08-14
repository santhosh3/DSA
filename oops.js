//Abstraction the main purpose of Abstraction is hiding the
//unnecessary details from the user

class ATM {
    constructor(withdraw){
        this.balance = 1000
        this.withdraw = withdraw
    }
    getAmount(){
        let minimum = 500
        if((this.balance - this.withdraw) >= minimum){
            console.log("withdraw is successful")
        }else{
            console.log("withdraw is Failed")
        }
    }
}

let obj = new ATM(500)
obj.getAmount()
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Encapsulation it is a mechanism of bundling data variables
//and methods together and hides them from another classes.

class person {
    constructor(name,age,salary){
        this.name = name
        this.age = age
        this.salary = salary
    }
    getName(){
        console.log(this.name)
    }
    getAge(){
        console.log(this.age)
    }
    getSalary(){
        console.log(this.salary)
    }
}
let obj1 = new person("kumar", 24, 23000)
obj1.getAge()
obj1.getSalary()
obj1.getName()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++