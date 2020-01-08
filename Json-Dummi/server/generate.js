function CreateProject(name) {
	var p = {
		name: faker.commerce.productName(),
		pictureURL: "https://cdn1.spiegel.de/images/image-881881-galleryV9-htln-881881.jpg",
		description: faker.lorem.paragraph(),
		tags: []
	}
	
	for(var i = 0; i < 2; i++){
		p.tags.push({
			name: faker.lorem.word()
		});
	}
	database.projects.push({id: name});
	return p;
};

var faker = require('faker');

var database = { aboutMe: {}, projects: [], p1Prev: {}, p2Prev: {}, p3Prev: {}};

database.aboutMe = {
    name:"MY NAME",
    pictureURL:"https://www.mera-petfood.com/files/_processed_/b/3/csm_Katze_eingewoehnen_MERA-Katzenratgeber_85ea6d4ff6.jpg"
}

database.p1Prev = CreateProject("p1Prev");
database.p2Prev = CreateProject("p2Prev");
database.p3Prev = CreateProject("p3Prev");

console.log(JSON.stringify(database));