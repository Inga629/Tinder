const Ents = [
    { id: 0, type: "movie", name: "die hard2", price: 40, date: "10.12.2020", image: "diehard2.jpg", threeD: true },
    { id: 1, type: "movie", name: "Lion King", price: 30, date: "10.12.2021", image: "lionking.jpg", threeD: false },
    { id: 2, type: "play", name: "Hamlet", price: 120, date: "10.11.2021", image: "hamlet.png", drinks: true, hever: true },
    { id: 3, type: "play", name: "Romeo & Juliet", price: 150, date: "10.12.2023", image: "romeoandjuliet.jpg", drinks: true, hever: false },
    { id: 4, type: "play", name: "Romeo & Juliet", price: 170, date: "10.12.2013", image: "romeoandjuliet.jpg", drinks: true, hever: true }
]

$(document).ready(function() {

    mainapp = new MainApp(Ents);
    mainapp.Render();

});


class MainApp {
    constructor(Ents) {
        this.EntsArr = Ents.map(function(ent) {
            let e;
            try {
                if (ent.type == "movie")
                    e = new Movie(ent.id, ent.name, ent.price, ent.date, ent.image, ent.threeD);
                else
                    e = new Play(ent.id, ent.name, ent.price, ent.date, ent.image, ent.drinks, ent.hever);
            } catch {
                e = null;
            }
            return e;
        });

        let temp = this.EntsArr.filter(n => n); //  removes null entries from the array
        this.EntsArr = temp;



    }
    Render() {
        let str = "";
        this.EntsArr.map(function(ent) {
            str += ent.Render();
        })
        $("#app").html(str);
    }
}


class Entertaiment {
    constructor(id, name, price, date, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.Date = date;
        this.image = image;

    }

    get Date() {
        return this.date;
    }

    set Date(value) {
        let d = new Date();
        let now = d.getTime();
        let inputArr = value.split('.');
        let inputDate = new Date(inputArr[2], inputArr[1] - 1, inputArr[0]);
        if (now - inputDate.getTime() > 0) {
            alert(value + " is in the past and will not be added");
            throw -1;
        }
        this.date = value;
    }

}

class Movie extends Entertaiment {
    constructor(id, name, price, date, image, threeD = false) {
        super(id, name, price, date, image);
        this.threeD = threeD;
    }

    Render() {
        var str = "<div class ='ent movie'>";
        str += "<img src='images/" + this.image + "'/>";
        str += "<p>" + this.name + "</p>";
        str += "<p>" + this.price + " NIS</p>";
        str += "<p>" + this.date + "</p>";
        var threeDstr = "non 3D movie";
        if (this.threeD == true) threeDstr = "A 3D movie";
        str += "<p>" + threeDstr + "</p>";
        str += "</div>";
        return str;
    }

}

class Play extends Entertaiment {
    constructor(id, name, price, date, image, drinks = false, hever = false) {
        super(id, name, price, date, image);
        this.drinks = drinks;
        this.hever = hever;
    }

    Render() {
        var str = "<div class ='ent play'>";
        str += "<img src='images/" + this.image + "'/>";
        str += "<p>" + this.name + "</p>";
        str += "<p>" + this.price + " NIS</p>";
        str += "<p>" + this.date + "</p>";
        if (this.drinks == true) {
            let drinksStr = "First free CockTail Drinks!!!";
            str += "<p>" + drinksStr + "</p>";
        }
        if (this.hever == true) {
            str += "<span> I have a Hever Card </span> <input type ='checkbox' onchange='heverChange(this.checked)'/>";
        }
        str += "</div>";
        return str;
    }

}

function heverChange(checked) {
    if (checked) alert("has a hever card");
    else alert("no hever card");
}