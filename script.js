function checkId(){
    let idTestCheck1 = prompt ("Are you wearing your school id? (yes/no)");
    let idTestCheck2 = idTestCheck1.trim();
    let idCheck = idTestCheck2.toLowerCase();
    if (idCheck === "yes"){
        document.getElementById("determEntry").innerHTML =
        "Welcome to the Event."
    } else {
        document.getElementById("determEntry").innerHTML =
        "Please Show your ID."
    }
}

function jeepFare(){
    let studCheck1 = prompt ("Are you a student?(yes/no)");
    let seniorCheck1 = prompt ("Are you a senior citizen?(yes/no)");
    let studCheck2 = studCheck1.trim();
    let studCheck = studCheck2.toLowerCase();
    let seniorCheck2 = seniorCheck1.trim();
    let seniorCheck = seniorCheck2.toLowerCase();

    if(studCheck === "yes" || seniorCheck === "yes"){
        document.getElementById("jeepDisc").innerHTML =
        "You get discounted fare"
    } else {
        document.getElementById("jeepDisc").innerHTML =
        "You will pay regular fare."
    }
}

function quizEvaluator(){
    let grade= Number(prompt("Input your Quiz Score: "));
    if(grade<0||grade>100){
        document.getElementById("evaluatedQuiz").innerHTML =
        "Invalid Score"
    } else if(grade==100){
        document.getElementById("evaluatedQuiz").innerHTML =
        "Perfect Score;"
    } else if (grade>=90){
        document.getElementById("evaluatedQuiz").innerHTML =
        "Excellent"
    } else if (grade>=75){
        document.getElementById("evaluatedQuiz").innerHTML =
        "Good Job"
    } else if (grade>=60){
        document.getElementById("evaluatedQuiz").innerHTML =
        "You passed"
    } else {
        document.getElementById("evaluatedQuiz").innerHTML =
        "You need to review"
    } 
}

function dataOption(){
    let choice1 = prompt("Choose your data promo (A,B,C): ");
    let choice = choice1.toUpperCase();

    switch(choice){
        case "A":
            document.getElementById("dataOption").innerHTML =
            "1 GB for 1 Day"
            break;
        case "B":
            document.getElementById("dataOption").innerHTML =
            "5 GB for 7 Days"
            break;
        case "C":
            document.getElementById("dataOption").innerHTML =
            "10 GB for 30 Days"
            break;
        default:
            document.getElementById("dataOption").innerHTML =
            "Invalid Choice"
            break;
    }
}

function vowelCounter(){
    let exName = prompt("Insert Full Name: ");
    let name = exName.toLowerCase();
    let vowelCount = 0;

    for(let i = 0; i < name.length; i++){
        let letter = name.at(i);
        if(letter == 'a' ||letter == 'e'|| letter == 'i'|| letter == 'o'|| letter == 'u'){
        vowelCount+=1;
        }
    }

    document.getElementById("countedVow").innerHTML =
    "Your name contains " + vowelCount + " vowels."
}

function userNameValid(){
    let userName = prompt ("Insert Username: ");
    let hasSpace = false;
    let wrongLength = false;

    if(userName.length<6){
        wrongLength = true;
    }
    for(let i=0; i <userName.length; i++){
        if(userName[i] === " "){
            hasSpace = true;
    }
    }
    if(hasSpace && wrongLength){
            document.getElementById("userValidation").innerHTML =
            "Username must not contain spaces and must be atleast 6 characters"
        }else if (hasSpace == true){
            document.getElementById("userValidation").innerHTML =
            "Username must not contain spaces"
        }else if (wrongLength == true){
            document.getElementById("userValidation").innerHTML =
            "Username must be atleast 6 characters"
        }else{
            document.getElementById("userValidation").innerHTML =
            "Valid Username"
        }
    }

function passwordCheck(){
    let password = "Grade9JS";
    let attempts = 0;

    while(attempts < 3){
        let loginAttempt1 = prompt("Insert password: ");
        let loginAttempt = loginAttempt1.trim();
        
        if (loginAttempt == password){
            document.getElementById("loginStatus").innerHTML = "Login sucessful"
            break;
        }
        attempts++;
    }

    if(attempts == 3){
            document.getElementById("loginStatus").innerHTML = "Account locked."
    }
}