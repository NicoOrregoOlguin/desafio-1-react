import React from 'react';
import Header from './Header';
import MyCard from './MyCard';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import huskyimg from './assets/img/husky.jpg';
import messi from './assets/img/messi.jpg';
import gohan from './assets/img/gohan.jpg';
import princesa from './assets/img/Princesa.jpg';



function App() {
  const dogInfo = [
    {
      imgSrc: huskyimg,
      name: "Bartolo",
      description: "Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!",
      tagText: "Husky",
      tagColor: "success"
    },
    {
      imgSrc: messi ,
      name: "Messi",
      description: "Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!",
      tagText: "Bobtail",
      tagColor: "info"
    },
    {
      imgSrc: gohan, 
      name: "Gohan",
      description: "Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!",
      tagText: "Shar Pei",
      tagColor: "danger"
    },
    {
      imgSrc: princesa, 
      name: "Princesa",
      description: "Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!",
      tagText: "Beagle",
      tagColor: "warning"
    }
  ];

  return (
    <div className="App">
      <Header title="Adopta un perrito" />
      <div className="card-container">
        {dogInfo.map(dog => (
          <MyCard 
            key={dog.name}
            imgSrc={dog.imgSrc} 
            name={dog.name} 
            description={dog.description} 
            tagText={dog.tagText} 
            tagColor={dog.tagColor}
          />
        ))}
      </div>
      <Footer description="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre." />
    </div>
  );
}

export default App;
