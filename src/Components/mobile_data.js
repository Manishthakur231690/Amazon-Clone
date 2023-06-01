import img1 from './Images/mo1.jpg'
import img2 from './Images/mo2.jpg'
import img3 from './Images/mo3.jpg'
import img4 from './Images/mo4.webp'
import img5 from './Images/mo5.webp'
import img6 from './Images/mo6.jpg'
import img7 from './Images/mo7.jpg'
import img8 from './Images/mo8.webp'
import img9 from './Images/mo9.webp'
import img10 from './Images/mo10.webp'
import img11 from './Images/mo11.webp'
import img12 from './Images/mo12.webp'
import img13 from './Images/mo13.jpg'
import img14 from './Images/mo14.webp'
import img15 from './Images/mo15.webp'




const data = [
    {
        id: '1',
        name: 'One Plus Phone Skyblue (8GB, 128GB)',
        image: img1,
        cost: '18,550',
        cutCost: '21,680',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'4'

    },
    {
        id: '2',
        name: 'MI Redmi 10A Smartphone(6GB, 64GB)',
        image: img2,
        cost: '13,500',
        cutCost: '15,750',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'4.2'

    },
    {
        id: '3',
        name: 'One Plus Phone Black (8GB, 128GB)',
        image: img3,
        cost: '18,160',
        cutCost: '20,750',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'3.8'

    },
    {
        id: '4',
        name: 'IKALL Smartphone Skyblue (4GB, 64GB) ',
        image: img4,
        cost: '12,025',
        cutCost: '14,250',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'4.2'

    },
    {
        id: '5',
        name: 'Realme narzo 50i (4GB, 64GB, 36MP)',
        image: img5,
        cost: '11,410',
        cutCost: '13,520',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'4.3'
    }
    ,
    {
        id: '6',
        name: 'MI Redmi A1 Smartphone Skyblue(4GB, 64GB)',
        image: img6,
        cost: '9,950',
        cutCost: '11,100',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'4.8'
    },
    {
        id: '7',
        name: 'MI Redmi A1 Smartphone Gray-Black(4GB, 64GB)',
        image: img7,
        cost: '9,350',
        cutCost: '11,480',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'4.1'
    },
    {
        id: '8',
        name: 'One Plus Smartphone Black (8GB, 128GB, 108MP)',
        image: img8,
        cost: '19,950',
        cutCost: '22,200',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'4.4'
    },
    {
        id: '9',
        name: 'iQOO Z6 Black (6GB, 128GB) 64MP Camera',
        image: img9,
        cost: '16,500',
        cutCost: '18,650',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'3.6'
    },
    {
        id: '10',
        name: 'One Plus Nord 2 with 108MP Camera (6GB, 64GB)',
        image: img10,
        cost: '18,756',
        cutCost: '20,850',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'4.9'
    },
    {
        id: '11',
        name: 'Inflix NOTE 12 5G Black Gaming (8GB, 128GB)',
        image: img11,
        cost: '21,450',
        cutCost: '23,540',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'4.3'
    },
    {
        id: '12',
        name: 'Samsung M04 Mobile (4GB, 64GB) 16MP Camera',
        image: img12,
        cost: '10,680',
        cutCost: '12,800',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'4.2'
    },
    {
        id: '13',
        name: 'Samsung M33 5G Smartphone (8GB, 128GB) 64MP',
        image: img13,
        cost: '16,450',
        cutCost: '18,600',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'3.9'
    },
    {
        id: '14',
        name: 'Samsung M13 with 50MP Camera (6GB, 64GB)',
        image: img14,
        cost: '13,410',
        cutCost: '15,550',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'4.6'
    },
    {
        id: '15',
        name: 'Samsung F23 5G Smartphone (6GB, 128GB) 64MP Camera',
        image: img15,
        cost: '17,230',
        cutCost: '19,480',
        des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
        rating:'4.7'
    }
]



export default data