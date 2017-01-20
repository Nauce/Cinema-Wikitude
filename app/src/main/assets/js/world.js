//Las imágenes de los animales han sido obtenidas de: http://www.dapino-colada.nl/6-animals-transparent-pngs
//Los sonidos de los animales han sido obtenidos de: http://www.soundboard.com/
//Las descripciones de los animales han sido obtenidas de: http://www.wikipedia.org/
//AR.logger.activateDebugMode();
function World() {
	this.loaded = false;

	this.load = function() {		
        vaiana = {title: "Vaiana",
				src: "assets/vaiana.png",
				room: 6,
				time: ["16:00", "18:00", "20:00", "22:00"],
                image: new AR.ImageResource("assets/vaiana.png"),
                x: 0,
        		y: 1.04,
				trailer: "https://www.youtube.com/watch?v=tmpTGztGJ8E",
				country: "EE.UU.",
				length: 103,
				rating: "TP",
                synopsis: "Hace miles de años los mejores marineros del mundo viajaban a lo largo del océano Pacífico descubriendo nuevas islas, pero un buen día sus viajes cesaron y aún nadie ha descubierto porqué. Vaiana, una joven apasionada e intrépida que siente un fuerte vínculo con el mar, es la hija adolescente del líder de una tribu que habita las islas del Pacífico Sur. Ella está dispuesta a resolver el misterio sobre sus antepasados.<br><br>Siguiendo el consejo de su abuela, la joven decide hacer oídos sordos a la prohibición de su padre de permanecer en la isla, y se lanza a los confines del Océano en compañía de su mascota, un torpe gallo de nombre Heihei. En su camino se encontrarán con Maui, un semidiós que cuenta con un anzuelo mágico, que le da la habilidad de cambiar de forma. Juntos vivirán una gran aventura en la que se enfrentarán a feroces criaturas en una misión casi imposible que les llevará a cruzar el mar abierto, encontrando a su paso mucha acción, enormes animales marinos, submundos sorprendentes y culturas antiguas."
				};

        aliados = {title: "Aliados",
				src: "assets/aliados.png",
				room: 4,
				time: ["15:00", "17:00", "19:00", "21:00"],
                image: new AR.ImageResource("assets/aliados.png"),
                x: 0.72,
        		y: 1.04,
				trailer: "https://www.youtube.com/watch?v=vJnl585HH4E",
				country: "EE.UU.",
				length: 124,
				rating: "+7",
                synopsis: "Años 40. Segunda Guerra Mundial. Max Vatan (Brad Pitt) es un agente de inteligencia del bando aliado destinado en Marruecos, que debe realizar una peligrosa misión en el norte de África. Mientras cumple con su cometido, conoce en Casablanca a Marianne Beausejour (Marion Cotillard), una agente de la Resistencia francesa de quien se enamora. Al principio todo es una simple misión. Sin embargo, el tiempo vuelve a juntarlos en Londres, y el amor florece entre ellos, hasta el punto de que deciden formar una familia. Su vida parece perfecta hasta que la Guerra comienza a poner a prueba su relación.<br><br>Los superiores de Vatan le comunican que Marianne podría ser en realidad una agente doble al servicio de los nazis. Será entonces cuando, dolido por el reciente descubrimiento, empiece a sospechar y lleve a cabo una investigación para descubrir la verdad sobre su esposa. ¿Tendrá que matarla si efectivamente es así?"
				};
        
        animales_fantasticos = {title: "Animales fantásticos y dónde encontrarlos",
				src: "assets/animales_fantasticos.png",
				room: 3,
				time: ["15:30", "17:30", "19:30", "21:30"],
                image: new AR.ImageResource("assets/animales_fantasticos.png"),
                x: 0.72,
        		y: 0,
				trailer: "https://www.youtube.com/watch?v=US2LnWrrCq4",
				country: "Reino Unido",
				length: 133,
				rating: "+12",
                synopsis: "Nueva York, año 1926. El excéntrico magizoólogo Newt Scamander (Eddie Redmayne) acaba de ser expulsado de Hogwarts debido a un incidente relacionado con una de sus criaturas mágicas. El joven mago decide entonces emprender un viaje por el mundo en busca de nuevas variedades de criaturas extraordinarias. Acompañado de una enigmática maleta repleta de los sorprendentes seres que ha coleccionado a lo largo de los años, llega a Nueva York. Allí se cruza por casualidad con Jacob Kowalski (Dan Floger), un panadero que acaba de volver de la guerra. A raíz de una confusión con sus respectivos equipajes de mano, se produce la fuga de algunos de los animales fantásticos de Newt y ambos se ven obligados a colaborar para resolver ese terrible problema, que afecta tanto a la comunidad mágica dirigida por el MACUSA (el Mágico Congreso de USA) como a los Muggle.<br><br>Newt y su nuevo amigo Jacob deberán esforzarse por resolver el incidente sin que nadie se entere. Ya que la comunidad mágica americana es mucho más estricta que la británica, y las consecuencias de revelar sus poderes en público son terribles. Pero no estarán solos en esta aventura, ya que también conocerán a Porpentina Goldstein (Katherine Waterston), a su hermana Queenie (Alison Sudol), a la presidenta del Congreso Seraphina Picquery (Carmen Ejogo) y al poderoso Percival Graves (Colin Farrell). Claro que no todos serán aliados… Los dos amigos tendrán que hacer frente a la organización radical liderada por May Lou Barebone (Samantha Morton), mientras que en Europa el misterioso mago oscuro Gellert Grindelwald (Johnny Depp) está causando grandes estragos."
				};
        
        canta = {title: "¡Canta!",
				time: ["16:00", "18:00", "20:00", "22:00"],
				src: "assets/canta.png",
				room: 2,
                image: new AR.ImageResource("assets/canta.png"),
                x: 0.72,
        		y: -1.04,
				trailer: "https://www.youtube.com/watch?v=JGoiueEm0Vc",
				country: "EE.UU.",
				length: 108,
				rating: "TP",
                synopsis: "En un mundo como el nuestro, pero poblado por animales, Buster Moon es un optimista koala que regenta un teatro que conoció tiempos mejores. Buster ama su teatro con pasión y es capaz de cualquier cosa para salvarlo. Sabe que el sueño de su vida está a punto de desaparecer y solo tiene una oportunidad para mantenerlo a flote: organizar el concurso de canto más grande del mundo.<br><br>Su objetivo es atraer a multitud de animales que busquen convertirse en estrellas. Entre toda esa fauna de candidatos, todos ellos movidos por su pasión por la música, y después de pasar varias etapas, quedan cinco finalistas: el ratón Mike cuya voz es tan suave como la forma en que engaña a todos, Rosita una exhausta y sobrecargada madre de 25 cerditos, el joven gorila Johnny que pertenece a un clan de mafiosos y que intenta alejarse de su familia de criminales, la puercoespín punk-rock Ash que intenta deshacerse de su arrogante novio y cantar en solitario, y la tímida elefanta adolescente Meena que padece de un grave caso de miedo escénico. Los cinco llegan al teatro de Buster convencidos de que es su oportunidad para cambiar radicalmente de vida. ¿Lograrán triunfar y salvar el teatro de Buster?"
				};
        
        rogue_one = {title: "Rogue One: Una historia de Star Wars",
				time: ["16:30", "18:30", "20:30", "22:30"],
				src: "assets/rogue_one.png",
				room: 8,
                image: new AR.ImageResource("assets/rogue_one.png"),
                x: 0,
        		y: -1.04,
				trailer: "https://www.youtube.com/watch?v=MjXKp-mhKYA",
				country: "EE.UU.",
				length: 134,
				rating: "+12",
                synopsis: "Jyn Erso (Felicity Jones) es una problemática recluta Rebelde, hábil y testaruda, que está a punto de experimentar su mayor desafío hasta la fecha. Mon Mothma (Genevieve O'Reilly), Senadora y líder secreto de la Alianza Rebelde, le ha confiado el mando de un importante cometido: robar los planos de la Estrella de la Muerte, la última y destructiva arma del Imperio Galáctico que tiene a Orson Krennic (Ben Mendelsohn) como director de seguridad.<br><br>Este nave secreta y letal es capaz de hacer saltar por los aires planetas enteros en un pestañeo, por ello no hay tiempo que perder y el grupo de Rebeldes liderado por Jyn tendrá que embarcarse de inmediato en esta arriesgada misión, que les hará formar parte de algo más grande que ellos mismos. La joven cabecilla contará, entre otros, con la ayuda del Capitán Cassian Andor (Diego Luna), el gran piloto Bodhi Rook (Riz Ahmed), el guerrero invidente Chirrut Imwe (Donnie Yen) y su protector Baze Malbus (Jiang Wen). Pero, ¿podrá un grupo de personas ordinarias llevar a cabo con éxito una misión extraordinaria?"
				};
        
        la_llegada = {title: "La llegada",
				src: "assets/la_llegada.png",
				room: 9,
				time: ["16:00", "18:00", "20:00", "22:00"],
                image: new AR.ImageResource("assets/la_llegada.png"),
                x: -0.72,
        		y: -1.04,
				trailer: "https://www.youtube.com/watch?v=uWs5lsWXLbo",
				country: "EE.UU.",
				length: 117,
				rating: "+7",
                synopsis: "Doce naves alienígenas de más de 450 metros de altura han llegado a la Tierra, situándose en diversos puntos del planeta. La reputada experta en lingüística Louis Banks (Amy Adams) es entonces contratada por el Gobierno de los EE.UU, con el fin de descifrar y traducir el mensaje que los extraterrestres intentan transmitir a la humanidad.<br><br>Louise viajará hasta Montana, Estados Unidos, junto al científico Ian Donnelly (Jeremy Renner), para intentar establecer una comunicación con los “visitantes”. Juntos intentarán encontrar respuestas a este sorprendente suceso. ¿Por qué los alienígenas han venido? ¿Quieren invadir el planeta? ¿Cuáles son realmente sus intenciones? Ante la amenaza de una posible guerra mundial, los líderes de los grandes países deben llegar a un acuerdo para que la situación no se complique aún más y, así, evitar un conflicto cuyas consecuencias podrían ser catastróficas."
				};
		
		belleza_oculta = {title: "Belleza oculta",
				src: "assets/belleza_oculta.png",
				room: 1,
				time: ["15:15", "17:15", "19:15", "21:15"],
                image: new AR.ImageResource("assets/belleza_oculta.png"),
                x: -0.72,
        		y: 0,
				trailer: "https://www.youtube.com/watch?v=nQFTfCBOdJo",
				country: "EE.UU.",
				length: 97,
				rating: "+12",
                synopsis: "Howard Inlet (Will Smith) es un brillante y exitoso ejecutivo de publicidad de Nueva York. Su vida cambia drásticamente cuando una tragedia personal le golpea con fuerza, haciendo que se suma en una profunda espiral de depresión. Aunque sus compañeros más cercanos harán lo posible para lograr que se anime y salga de su letargo, no será tarea fácil. Por ello pondrán en marcha un plan poco convencional, que obligará a Howard a afrontar su sufrimiento de una manera sorprendente y profundamente humana. Pero este plan también traerá consigo resultados imprevistos."
				};
				
		assassins_creed = {title: "Assassins Creed",
				src: "assets/assassins_creed.png",
				room: 5,
				time: ["16:45", "18:45", "20:45", "22:45"],
                image: new AR.ImageResource("assets/assassins_creed.png"),
                x: -0.72,
        		y: 1.04,
				trailer: "https://www.youtube.com/watch?v=uNOnq5YaNxg",
				country: "EE.UU.",
				length: 146,
				rating: "+12",
                synopsis: "Callum Lynch (Michael Fassbender) es un criminal encerrado en prisión y condenado a ser ejecutado por sus delitos. Pero, Lynch recibirá una nueva oportunidad de la organización Abstergo, entidad dirigida por Alan Rikkin (Jeremy Irons). Así, con la ayuda de Sophia Rikkin (Marion Cotillard) y a través de una tecnología revolucionaria que permite rastrear su ADN y desbloquear sus recuerdos genéticos, Lynch experimentará las aventuras de su antepasado Aguilar de Nehra, un asesino miembro de la hermandad secreta de los Asesinos y ascendiente suyo que vivió durante la España del siglo XV, en pleno auge de Inquisición Española."
				};
		
        //ahora tenemos un array con información de todos los animales
		this.films = [vaiana, aliados, animales_fantasticos, canta, rogue_one, la_llegada, belleza_oculta, assassins_creed];
        
		this.createOverlays(); //para mostrar elementos (capas sobre la imagen que visualiza la cámara)
	};

	this.createOverlays = function createOverlaysFn() {
		//inicialización del tracker para reconocer una imagen
		this.tracker = new AR.Tracker("assets/cinema.wtc", { //hemos creado el tracker primer en Wikitude
			onLoaded: this.worldLoaded() //cuando se cargue el tracker => se invoca al método this.worldLoaded()
		});
		
		imageDrawables = [];
        for (var i = 0; i < this.films.length; i++) {
    		imageDrawables[i] = new AR.ImageDrawable(this.films[i].image, 1, { //imagen que representa a cada pelicula
    			offsetX: this.films[i].x, //posición X de cada pelicula
    			offsetY: this.films[i].y, //posición Y de cada pelicula
    			onClick: this.filmClicked(this.films[i]) //cuando se hace clic se "activa"
    		});
        }
	
		//si se detecta la imagen "letsgoplay.jpg" se pone la imagen del burro en pantalla
		var overlays = new AR.Trackable2DObject(this.tracker, "cinema", { 
			drawables: {
				cam: imageDrawables
			}
		});
	};

	//cuando se carga el archivo WTC se elimina el mensaje de aviso "loading..."
	this.worldLoaded = function() {
		document.body.removeChild(document.getElementById('loadingMessage')); 
	};
	
	//cuando se pulsa sobre un animal, el animal emite un ruido y se muestra información sobre él (es un evento)
	this.filmClicked = function(film){
        return function() {
			document.getElementById("book").setAttribute("class", "book");
			selectedFilm = film;
            document.getElementById("filmTitle").innerHTML = film.title + ' | Sala ' + film.room;
			document.getElementById("cover").src = film.src;
            document.getElementById("filmTime").innerHTML = '';
			var para;
			var node;
			for (var i = 0; i < film.time.length; i++) {
				para = document.createElement("p");
				node = document.createTextNode(film.time[i]);
				para.appendChild(node);
				para.setAttribute("class", "time");
				document.getElementById("filmTime").appendChild(para);
			}
            document.getElementById("film").setAttribute("class", "filmVisible");
        };
	};

};

//clase con el mundo principal
world = new World();
world.load();

var selectedFilm;

function book() {
	document.getElementById("film").setAttribute("class", "film");
	
	document.getElementById("book-filmTitle").innerHTML = selectedFilm.title + ' | Sala ' + selectedFilm.room;
	document.getElementById("book-cover").src = selectedFilm.src;
	document.getElementById("book-filmTime").innerHTML = '';
	document.getElementById("book-filmData").innerHTML = selectedFilm.rating + " | Duración: " + selectedFilm.length + " min."; 
	document.getElementById("book-filmCountry").innerHTML = "País: " + selectedFilm.country;
	document.getElementById("book-filmSynopsis").innerHTML = selectedFilm.synopsis;
	var para;
	var node;
	for (var i = 0; i < selectedFilm.time.length; i++) {
		para = document.createElement("p");
		node = document.createTextNode(selectedFilm.time[i]);
		para.appendChild(node);
		para.setAttribute("class", "book-time");
		document.getElementById("book-filmTime").appendChild(para);
	}
	
    document.getElementById("book").setAttribute("class", "bookVisible");
}

function closeBook() {
	document.getElementById("book").setAttribute("class", "book");
}

function buyTickets() {
	AR.context.openInBrowser("http://www.compraentradas.com/");
}

function trailer() {
	AR.context.openInBrowser(selectedFilm.trailer);
}