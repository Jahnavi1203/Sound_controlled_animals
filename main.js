function startClassifation(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/laCCorUFt/model.json", modelReady);
}

function modelReady(){
    classifier.classify(getResults);
}

function getResults(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log("get result");
        randomNumber_r = Math.floor(Math.random()*255) + 1;
        randomNumber_g = Math.floor(Math.random()*255) + 1;
        randomNumber_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_label").style.color = "rgb (" + randomNumber_r + "," + randomNumber_g + "," + randomNumber_b +")";

        img1 = document.getElementById("cat");
        img2 = document.getElementById("lion");
        img3 = document.getElementById("noise");
        img4 = document.getElementById("dog");

        if(results[0].label == "Background Noise"){
            img.src = "background_noise pic.jpg";
        }
        else if(results[0].label == "lion"){
            img.src = "lion pic.jpg"
        }
        else if(results[0].label == "cat"){
            img.src = "cat pic.jpg"
        }
        else if(results[0].label == "dog"){
            img.src = "dog pic.jpg"
        }

    }
    
}

