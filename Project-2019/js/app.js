const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

var mongoDBDatabase;

MongoClient.connect(mongoURL, function (err, client) {
    if (err) {
      throw err;
    }
    db = mongoDBDatabase = client.db(mongoDBName);
    app.listen(27017, function () {
      console.log("== Server listening on port 3000");
    });

    db.films.insertOne({
        title: "Black butterfly",
        showing: "10.05.2019",
        duration: "93 min",
        country: "USA",
        genre: "Thriller",
        actors: "Antonio Banderas, Jonathan Rhys Meyers, Piper Perabo",
        director: "Brian Goodman",
        summary: "Outside a mountain town grappling with a series of abductions and murders, Paul, a reclusive writer, struggles to start what he hopes will be a career-saving screenplay. After a tense encounter at a diner with a drifter named Jack, Paul offers Jack a place to stay. Soon the edgy, demanding Jack muscles his way into Paul's work and the two men begin a jagged game of one-upmanship that will bring at least one tale to an end. Brian Goodman was born in 1963 in the USA. He is an actor and director, known for The Fast and the Furious: Tokyo Drift (2006), Minhen (2005) and Catch Me If You Can.",
        photos: [
            {
                url: "images/film1mala1.jpg"
            },
            {
                url: "images/film1mala2.jpg"
            },
            {
                url: "images/film1mala3.jpg"
            }
        ]
    });

    db.films.insertOne({
        title: "The Nile Hilton incident",
        showing: "28.02.2019",
        duration: "106 min",
        country: "DNK",
        genre: "Thriller",
        actors: "Fares Fares, Mari Malek, Yasser Ali Maher",
        director: "Tarik Saleh",
        summary: "Cairo 2011, just weeks before the revolution. Police Detective Noredin, working in the in-famous Kasr el-Nil Police Station, is handed the case of a murdered singer. He soon realizes that the investigation concerns the very power elite, close to the President’s inner circle. Tarik Saleh (b. 1972, Stockholm) is a screenwriter, director, and producer. At the end of the 1980s he entered the history of Swedish culture as a top graffiti artist. In 2001 he co-directed the provocative documentary Sacrificio - Who Betrayed Che Guevara? In 2009 he finished the animated feature Metropia, which premiere opened the Settimana della critica at Venice and then toured over 65 festivals.",
        photos: [
            {
                url: "images/film3mala1.jpg"
            },
            {
                url: "images/film3mala2.jpg"
            },
            {
                url: "images/film3mala3.jpg"
            }
        ]
    });

    db.films.insertOne({
        title: "Au revoir là-haut",
        showing: "24.05.2019",
        duration: "117 min",
        country: "FRA",
        genre: "Drama",
        actors: "Nahuel Pérez Biscayart, Albert Dupontel, Laurent Lafitte",
        director: "Albert Dupontel",
        summary: "November 1919. Two survivors of the trenches set up a scam based on war memorials. One is a brilliant illustrator, the other an unassuming accountant. In the France of the Roaring Twenties, their operation becomes as dangerous as it is spectacular. Albert Dupontel is a French actor and director who began his career as a monologue artist. His first film, Bernie earned him a place as a new voice in French cinema. He continued to alternate his eclectic career as an actor with directing his own films.",
        photos: [
            {
                url: "images/film2mala1.jpg"
            },
            {
                url: "images/film2mala2.jpg"
            },
            {
                url: "images/film2mala3.jpg"
            }
        ]
    });

    db.films.insertOne({
        title: "Una Mujer Fantástica",
        showing: "24.05.2019",
        duration: "100 min",
        country: "CHL",
        genre: "Drama",
        actors: "Daniela Vega, Francisco Reyes, Luis Gnecco, Aline Küppenheim",
        director: "Sebastián Lelio",
        summary: "Marina is a young waitress and wannabe singer. Orlando owns a printing company. Together they plan their future. When Orlando dies suddenly, Marina has to stand up to his family and society to show them what she truly is: a complex, strong, forthright and... fantastic woman. Sebastián Lelio is a director, screenwriter, cinematographer, editor and producer. His first film, The Sacred Family, competed at the San Sebastian Festival in 2005. It was followed by Christmas and The Year of the Tiger. Gloria, won the Films in Progress Award at the San Sebastian Festival in 2012 and the Silver Bear for Best Actress at that of Berlin in 2013. Una mujer fantástica received the Teddy and Best Screenplay Awards at the last Berlinale.",
        photos: [
            {
                url: "images/film4mala1.jpg"
            },
            {
                url: "images/film4mala2.jpg"
            },
            {
                url: "images/film4mala3.jpg"
            }
        ]
    });