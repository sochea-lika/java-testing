console.log("=== Homework: Grade Calculator ===");
let score=[10,30,70,80,40]
let sum=0;
for(let i=0;i<5;i++){
    sum+=score[i];
}
let avg=sum/5
if(avg>=90){
    console.log("Grade A")
}else if(avg>=80){
    console.log("Grade B")
}else if(avg>=70){
    console.log("Grade C")
}else{
    console.log("Grade F")
}