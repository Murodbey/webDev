/*Creat a class for ATM Machine. In this class you should have account with the value of some money. You can see current balance,
you can withdraw money and deposit money */

class ATM {
    constructor(currentBalance) {
        this.currentBalance = currentBalance

    }
    getCurrentBalance() {
        console.log(`Your current balance is $${this.currentBalance}`)
    }
    withdrawMoney(withdrawAmount) {
        if (withdrawAmount <= this.currentBalance) {
            const beforeWithdraw = this.currentBalance
            const afterWithdraw = beforeWithdraw - withdrawAmount
            this.currentBalance = afterWithdraw
            console.log(`Withdrawing ${withdrawAmount}....`)
            console.log(`Your current balance after withdrawal is ${this.currentBalance}  `)
        } else {
            console.log(`You have insufficient funds!!!`)
        }
    }
    depositMoney(depositAmount) {
        console.log(`Depositing ${depositAmount}....`)
        this.currentBalance = this.currentBalance + depositAmount
        console.log(`Your currnet balance after deposit is ${this.currentBalance}`)
    }

}

const current_balance1 = new ATM(1500)
// current_balance1.getCurrentBalance()
// current_balance1.withdrawMoney(500)
current_balance1.getCurrentBalance()
current_balance1.withdrawMoney(2000)
current_balance1.getCurrentBalance()
current_balance1.depositMoney(500)
current_balance1.getCurrentBalance()
current_balance1.withdrawMoney(2000)
current_balance1.getCurrentBalance()

