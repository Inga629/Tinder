const personFromDB = [
    {id : 0, name : "Dizza Beimal", gender: "female", age: 55, height: 162, location: "Michmoret",
      hobbies: ["Ceramics", "Pilatis"],
      image:"https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
      premium : true
    },
    {id : 1, name : "Benny Bornfeld", gender: "male", age: 53, height: 180, location: "Ein Sarid",
    image:"http://www.links.org.il/sites/default/files/images/portrates/benny.jpg"
    },
    // add 8 more records
    {id : 2, name : "Jennifer Joanna Aniston", gender: "female", age: 49, height: 164, location: "Tel Aviv",
    image:"http://www.lak.co.il/wp-content/uploads/2012/07/jen.jpg"
    },
    {id : 3, name : "Matthew Langford Perry", gender: "male", age: 49, height: 183, location: "Haifa",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Matthew_Perry_2013_lighting_and_color_corrected.jpg/250px-Matthew_Perry_2013_lighting_and_color_corrected.jpg"
    },
    {id : 4, name : "Courteney Bass Cox", gender: "female", age: 54, height: 165, location: "Jerusalem",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Courteney_Cox_%2710_PaleyFest.jpg/250px-Courteney_Cox_%2710_PaleyFest.jpg"
    },
    {id : 5, name : "Matthew Steven LeBlanc", gender: "male", age: 51, height: 178, location: "Ramat Gan",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Matt_LeBlanc%2C_Arqiva_British_Academy_Television_Awards%2C_2013_%28tone_crop%29.jpg/250px-Matt_LeBlanc%2C_Arqiva_British_Academy_Television_Awards%2C_2013_%28tone_crop%29.jpg"
    },
    {id : 6, name : "Lisa Valerie Kudrow", gender: "female", age: 55, height: 173, location: "Eilat",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Lisa_Kudrow_at_TIFF_2009.jpg/220px-Lisa_Kudrow_at_TIFF_2009.jpg"
    },
    {id : 7, name : "David Lawrence Schwimmer", gender: "male", age: 52, height: 185, location: "Tel aviv",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/David_Schwimmer_2011.jpg/250px-David_Schwimmer_2011.jpg"
    },
    {id : 8, name : "Cole Mitchell Sprouse", gender: "male", age: 26, height: 182, location: "Ashdod",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cole_Sprouse_by_Gage_Skidmore_2.jpg/220px-Cole_Sprouse_by_Gage_Skidmore_2.jpg"
    },
    {id : 9, name : "Paul Stephen Rudd", gender: "male", age: 49, height: 178, location: "Bat Yam",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDllNeTyF3ij3l3ZrUL5-EBmlIVLwpYZFZYAOy1OMSD7GN_R2gA"
    },
    {id : 10, name : "Winona Laura Horowitz", gender: "female", age: 47, height: 161, location: "Haifa",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Actress_Winona_Ryder_at_a_press_conference_for_Frankenweenie_2012_%28cropped%29.jpg/250px-Actress_Winona_Ryder_at_a_press_conference_for_Frankenweenie_2012_%28cropped%29.jpg"
    }
];
var Pgender = '';
var PminAge = 50;
var PmaxAge = 50;
var fields = {"gender":'',"minAge":'50',"maxAge":'50'};
$(document).ready(function() {
  // מוציא את המגדר הנבחר, עובד!!!
  
  $("#radio-choice-21").click(function(){
   Pgender="female";
   fields.gender = "female";
  });
  $("#radio-choice-22").click(function(){
    Pgender="male"; 
   });
  
  $("#slider-7").change(function(){
    PminAge = $("#slider-7").val();
  });

  $("#slider-8").change(function(){
    PmaxAge = $("#slider-8").val();
   });

   $("#find").click(function(){
    //collects the fields and store them in a JSON Object
    fields ={"gender":Pgender,"minAge":PminAge,"maxAge":PmaxAge}; 
   });
    mainapp = new MainApp(personFromDB);
    mainapp.Filter();
    mainapp.Render();
});

$(document).on("pagecreate", "#page2", function(){
  
  //לאתחל בערכים שהוזנו בדף הקודם
  $("input[name='radio-choice-3'][value='"+fields.gender +"']").prop('checked', true).checkboxradio('refresh');
  $("#slider-9").val(fields.minAge);
  $("#slider-10").val(fields.maxAge);

  //להביא את הערכים החדשים שהמשתמש הזין
  $("#radio-choice-31").click(function(){
    Pgender="female";
   });

  $("#radio-choice-32").click(function(){
     Pgender="male"; 
    });

  $("#slider-9").change(function(){
    PminAge = $("#slider-9").val();
    });

  $("#slider-10").change(function(){
    PmaxAge = $("#slider-10").val();
   });

   $("#find2").click(function(){
    //collects the fields and store them in a JSON Object
    fields ={"gender":Pgender,"minAge":PminAge,"maxAge":PmaxAge};
    mainapp = new MainApp(personFromDB);
    mainapp.Filter();
    mainapp.Render(); 
   });

  mainapp = new MainApp(personFromDB);
  mainapp.Filter();
  mainapp.Render();
  });

// Create a Profile class with all the fields except the hobbies
class Profile {
  constructor(id, name, gender, age, height, location, image, premium=false){
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.height = height;
    this.location = location;
    this.image = image;
    this.premium = premium;
  }
// create the render function
  Render() {
    var str = "<div class = 'person'>";
    str += "<div id='container'>"
    str += "<button id='button1'   class='ui-btn ui-btn-inline ui-icon-arrow-r ui-btn-icon-notext' onclick='Next()'></button>";
    str += "<img  id='imgperson' src='" + this.image + "'/>";
    str += "<button id='button2'   class='ui-btn ui-btn-inline ui-icon-heart ui-btn-icon-notext' onclick='Next()'></button>";
    str +="</div>"
    str += "<p> My name is " + this.name + "</p>";
    str += "<p> Gender: " + this.gender + "</p>";
    str += "<p> Age: " + this.age + " years </p>";
    str += "<p> Height:" + this.height + "</p>";
    str += "<p> From: " + this.location + "</p>";
    str += "<p> Premium: " + this.premium + "</p>";
    str += "</div>";
    return str;
 } 
}
// create a Premium class which inherits from Profile but also contains the hobbies array
// premium is default to false
class Premium extends Profile {
  constructor(id, name, gender, age, height, location,hobbies, image, premium=false) {
      super(id, name, gender, age, height, location,image, premium);
      this.hobbies = hobbies;
  }
// create the render function
  Render() {
    var str = "<div class = 'person'>";
    str += "<div id='container'>"
    str += "<button id='button1'   class='ui-btn ui-btn-inline ui-icon-arrow-r ui-btn-icon-notext' onclick='Next()'></button>";
    str += "<img  id='imgperson' src='" + this.image + "'/>";
    str += "<button id='button2'   class='ui-btn ui-btn-inline ui-icon-heart ui-btn-icon-notext' onclick='Next()'></button>";
    str +="</div>"
    str += "<p> My name is " + this.name + "</p>";
    str += "<p> Gender: " + this.gender + "</p>";
    str += "<p> Age: " + this.age + " years</p>";
    str += "<p> Height: " + this.height + "</p>";
    str += "<p> From: " + this.location + "</p>"; 
    str += "<p> Premium: " + this.premium + "</p>";
    str += "<p>" + this.hobbies+ "</p>";
    str += "</div>";
    return str;
  }
}
// create a MainApp class with:
class MainApp {
  constructor(personFromDB) {
      this.personFromDBArr = personFromDB.map(function(person) {
          let p;
          if (person.hobbies != null)
          {
            p = new Premium(person.id, person.name, person.gender, person.age, person.height, person.location, person.hobbies, person.image, person.premium);
          }
          else
          {
            p = new Profile(person.id, person.name, person.gender, person.age, person.height, person.location, person.image, person.premium);
          }
          return p;
      });
      this.currentIndex = 0;

  }
 // //Filter method which receives the JSON object   
  Filter(){
    this.personFromDBArr = this.personFromDBArr.filter(p => p.gender===fields.gender && p.age>=fields.minAge && p.age<=fields.maxAge);
  }
  
//Render method which presents one person at a time
  Render() {
    if (this.personFromDBArr.length == 0) {
      $("#info").html('<p>No matches found</p>');   
      return;
    }
      let str = this.personFromDBArr[this.currentIndex].Render();
      this.currentIndex++;
     // אם הגענו לסוף המערך נאתחל את האינדקס לאפס
      if (this.currentIndex >= this.personFromDBArr.length) {
        this.currentIndex = 0;
      }  
      $("#info").html(str);   
  }
}
//Next method which brings the next person once the user presses next or like buttons
function Next(){
  mainapp.Render();
}
function checkIfClickAvailable () {
  var isAvailable = Pgender != "";
  if (!isAvailable) {
    alert ('You need to choose gender');
  }
  return isAvailable;
}
  






