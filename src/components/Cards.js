import React from 'react'
import Card from './Card'
import './cards.css'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'



const cards = [
    {
        id: 1,
        title: 'Hatra',
        image: image1,
        text: 'Gran ciudad fortificada en la zona de influencia del Imperio Parto y capital del primer reino árabe, Hatra resistió dos veces el asalto de los romanos, en los años 116 y 198, gracias a su muralla provista de torres. Los vestigios de la ciudad, y más concretamente los de sus templos de arquitectura grecorromana con ornamentaciones orientales, testimonian la grandeza de la civilización.',
    },
    {
        id: 2,
        title: 'Asur (Qal’at Sherqat)',
        image: image2,
        text: 'Situada al norte de Mesopotamia, a orillas del Tigris, la antigua ciudad de Asur está emplazada en una zona geoecológica peculiar, donde la agricultura de regadío limita con la de secano. Asur, que se fundó tres mil años antes de la era cristiana, recibió el nombre de su dios protector y fue la capital religiosa de los asirios. Entre los siglos XIV y IX a. C., esta ciudad-estado fue la primera capital.',
    },
    {
        id: 3,
        title: 'Babilonia',
        image: image3,
        text: 'Situado a 85 km al sur de Bagdad, este sitio agrupa los vestigios arqueológicos de la ciudad que fue capital del antiguo Imperio Neobabilónico entre los años 626 y 539 a. C., así como de los pueblos y terrenos agrarios circundantes. Formados por los restos de templos, palacios y torres y puertas de los recintos amurallados del interior y exterior de la ciudad, los vestigios de Babilonia constituyen.',
    }
]


function Cards() {
    return (
        <div className="container d-flex align-items-center">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                        <Card title={card.title} imageSource={card.image} text={card.text}/>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Cards
