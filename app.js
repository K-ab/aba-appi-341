const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
 <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Agriculture</title>
        <link rel="stylesheet" href="styles/style.css">
      <style>
      html {
    background-image: linear-gradient(45deg, black, gray);
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    display: grid;
}
* {
    font-family:'Edu NSW ACT Foundation',cursive;
}
header h1 {
    margin: 0;
}

/*================ Start Main Styling======================*/


main {
    padding: 4rem 2rem;
   
}

/*================ End Main Styling======================*/


.welc{
    top: -0.5em;
    right: -0.5em;
    font-weight: bold;
    position: absolute;
    border-radius: 1em;
    background-color: green;
    box-shadow: 1px 1px 1px rgb(16, 27, 27);
    transform: scale(6);
    text-align: center;
    color: royalblue;
    font-size: 0.7em;
    padding: 2px;
    height: 1em;
    width: 1em;
    transition: transform 0.3s,
    color 1.2s;
    align-items: right;
    position: relative; 
    margin-left: 17.7%;   
    margin-right: 0.5%;      
}

/*================ Start header Styling======================*/

header{
    border-radius: 9px 9px 0 0;
    background-color: green;
    box-shadow: 0 2px 10px gray;
    text-align: center;
    height: 78px;
    padding-top: 10px;
}

/*================ End Header Styling======================*/


/*================ Start Body Styling======================*/


body {
    max-width: 600px;
    min-width: 900px;
    
    position: relative;
    align-self: center;
    background: white;
    border-radius: 10px;
    justify-self: center;
    box-shadow: 1px 1px 10px #0e0d0d;
    margin: 0;
}

/*================ End Body Styling======================*/

/*================ Start footer Styling======================*/

footer {
    background-color: green;
    box-shadow: 0 -2px 1px gray;
    border-radius: 0 0 10px 10px;
    text-align: center;
    padding: 1rem 0;
}

/*================ End Footer Styling======================*/

.welc.showOnHover {
    transform: scale(0);
    cursor: pointer;         
}

.welc:hover{
    color: white;
    transform: scale(1.5);
    cursor: pointer; 
}

.container {
    position: relative;
}



.ringring{
   
-webkit-border-radius: 20px;
    height: 25px;
    width: 25px;
    position: absolute;
    left: 145px;
    top: 1px;
-webkit-animation: pulsate 1s ease-out;
-webkit-animation-iteration-count: infinite; 
    opacity: 0.0;
}
@-webkit-keyframes pulsate{
    0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
    50% {opacity: 2.0;}
    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
}

.welc2{
    margin-left: 5%;
    top: -0.5em;
    right: -0.5em;
    font-weight: bold;
    position: absolute;
    border-radius: 1em;
    background-color: green;
    box-shadow: 1px 1px 1px rgb(16, 27, 27);
    transform: scale(6);
    text-align: center;
    color: royalblue;
    font-size: 0.7em;
    padding: 2px;
    height: 1em;
    width: 1em;
    transition: transform 0.3s,
    color 1.2s;
    align-items:center;
    position: relative; 
   
    margin-left: 10%;  
}





.container3 {
    position: relative;
    margin-left: 22%;
    margin-top:1% ;
}


.container4 {
    position: relative;
    margin-left: 42%;
    margin-top:1% ;
}

.container5 {
    position: relative;
    margin-left: 63%;
    margin-top:1% ;
}


.container6 {
    position: relative;
    margin-left: 42%;
    margin-top:1% ;
}


.container7{
    position: relative;
    margin-left: 23%;
    margin-top:10% ;
}

.container8{
    position: relative;
    margin-left: 23%;
    margin-top:5% ;
}

.container9{
    position: relative;
    margin-left: 42%;
    margin-top:26% ;
}

.container10{
    position: relative;
    margin-left: 62%;
    margin-top:26% ;
}


.container11{
    position: relative;
    margin-left: 63%;
    margin-top:5% ;
}


.ringring{
   
-webkit-border-radius: 20px;
    height: 25px;
    width: 25px;
    position: absolute;
    left: 145px;
    top: 1px;
-webkit-animation: pulsate 1s ease-out;
-webkit-animation-iteration-count: infinite; 
    opacity: 0.0;
}
@-webkit-keyframes pulsate{
    0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
    50% {opacity: 2.0;}
    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
}










body {
    background-image: url('images/avocat.jpeg');
    font-family:'Edu NSW ACT Foundation',cursive;
  }





























 
      </style>  
    </head>
    <body>
        <header>
             
             <h1>Aba Appi</h1>
             
             
           
        </header>
        <main>
<!--------------------------------Start Area--------------------------------------->

 <div class="container">
         <div class="ringring"><img class="welc" src="images/corossol.jpeg" alt="icon">
         </div>
      </div>
      </div>

<div class="container3">
        <div class="ringring"><img class="welc2" src="images/ignam.jpeg" alt="icon">
        </div>
     </div>
     </div>


<div class="container4">
        <div class="ringring"><img class="welc2" src="images/avocat.jpeg" alt="icon">
        </div>
     </div>
     </div>

     <div class="container5">
        <div class="ringring"><img class="welc2" src="images/cocoa2.jpeg" alt="icon">
        </div>
     </div>
     </div>

<br><br><br><br><br>

<div class="container7">
    <div class="ringring"><img class="welc2" src="images/raisinpic1.webp" alt="icon">
    </div>
 </div>
 </div>

<div class="container6">
    <div class="ringring"><img class="welc2" src="images/banana.webp" alt="icon">
    </div>
 </div>
 </div>



<div class="container">
    <div class="ringring"><img class="welc" src="images/mira.webp" alt="icon">
    </div>
 </div>
 </div>

 <div class="container11">
    <div class="ringring"><img class="welc2" src="images/mangopic1.webp" alt="icon">
    </div>
 </div>
</div>


<div class="container10">
    <div class="ringring"><img class="welc2" src="images/pawpaw.webp" alt="icon">
    </div>
 </div>
</div>

  

 <div class="container8">
    <div class="ringring"><img class="welc2" src="images/goya.webp" alt="icon">
    </div>
 </div>
</div>

<div class="container9">
    <div class="ringring"><img class="welc2" src="images/anacade.webp" alt="icon">
    </div>
 </div>
</div>

 <div class="container">
    <div class="ringring"><img class="welc2" src="images/pineapple1.jpg" alt="icon">
    </div>
 </div>
 </div>

 <br><br><br>
 <br><br><br><br><br><br>

 <div>
            
   

    <img class="welc" src="images/christmas.png" alt="icon">

 
    <img class="welc" src="images/christmas.png" alt="icon">


    <img class="welc" src="images/christmas.png" alt="icon">


    <img class="welc" src="images/christmas.png" alt="icon">

</div>


<!--------------------------------End Area--------------------------------------->


        </main>
        <footer>
            &copy;2022 Bernitos| Brigham yong University  
        </footer>

        <script src="scripts/index.js"></script>
    </body>
</html>
`
