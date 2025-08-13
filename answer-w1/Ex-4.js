console.log("=== Lab 4: If-Else Conditions ===");
let score=75
if(score >= 90){
    console.log("Grade: A")
}else if(score >= 80){
    console.log("Grade: B")
}else if(score >= 70){
    console.log("Grade: C")
}else{
    console.log("Grade: F")
}console.log("=== Lab 5: Loop Through Array and Print Even Numbers ===");
let nums=[1,2,3,4,5]
for(let i=0;i<5;i++){
    if (nums[i] % 2 === 0) {
            console.log("Number: ",nums[i])
    }
}