let age=prompt("Please Enter your Age:");
if (Number(age)>18) {
    let height=prompt("Please Enter Your Height:");
    if (Number(height)>170) {
        let weight=prompt("Please Enter Your Weight:");
        if (Number(weight)>60) {
            console.log("You are ELigible For Blood Donation...!");  
        }else{
            console.log("Not Eligible...Your Weight Should be Greater than 60");    
        }
    }else{
        console.log("Not Eligible...Your Height Should be Greater than 170");
    }
}else{
    console.log("Not Eligible...Your Age Should be Greater than 18");
    
}
