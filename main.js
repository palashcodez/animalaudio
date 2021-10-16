function startclassification(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/8hfk1tU7Y/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        

            hearing=document.getElementById("hearing");
            cat=document.getElementById("cat");
            dog=document.getElementById("dog");
            frog=document.getElementById("frog");
            bird=document.getElementById("bird");

        if(results[0].label=="Background Noise"){
            hearing.src="hearing.png";
            cat.src="transperantcat.png";
            dog.src="transperantdog.png";
            frog.src="transperantfrog.png";
            bird.src="transperantbird.png";
        }

        else if(results[0].label=="Dog Woof"){
            hearing.src="transperant.png";
            frog.src="transperantfrog.png";
            cat.src="transperantcat.png";
            dog.src="dog.png";
            bird.src="transperantbird.png";
        }

        else if(results[0].label=="Cat Meow"){
            hearing.src="transperant.png";
            frog.src="transperantfrog.png";
            cat.src="cat.png";
            dog.src="transperantdog.png";
            bird.src="transperantbird.png";
        }

        else if(results[0].label=="Bird Chirp"){
            hearing.src="transperant.png";
            frog.src="transperantfrog.png";
            cat.src="transperantcat.png";
            dog.src="transperantdog.png";
            bird.src="bird.png";
        }

        else if(results[0].label=="Frog Croak"){
            hearing.src="transperant.png";
            frog.src="frog.png";
            cat.src="transperantcat.png";
            dog.src="transperantdog.png";
            bird.src="transperantbird.png";
        }
    }
}