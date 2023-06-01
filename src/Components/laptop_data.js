    import img1 from './Images/img1.jpg'
    import img2 from './Images/img2.jpg'
    import img3 from './Images/img3.jpg'
    import img4 from './Images/img4.png'
    import img5 from './Images/img5.jpg'
    import img6 from './Images/img6.jpg'
    import img7 from './Images/img7.png'
    import img8 from './Images/img8.jpg'
    import img9 from './Images/img9.jpg'
    import img10 from './Images/img10.jpg'
    import img11 from './Images/img11.webp'
    import img12 from './Images/img12.webp'
    import img13 from './Images/img13.webp'
    import img14 from './Images/img14.jpg'
    import img15 from './Images/img15.png'
    import img16 from './Images/img16.webp'
    import img17 from './Images/img17.webp'
    import img18 from './Images/img18.webp'
    import img19 from './Images/img19.jpg'
    import img20 from './Images/img20.jpg'
    
    const laptop_data = [
        {
            id: '1',
            name: 'HP 15s AMD Athlon Silver 8GB RAM(512GB SSD)15.6-inches',
            image:  img1,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '45,000',
            cutCost: '50,480',
            rating:'4'

        },
        {
            id: '2',
            name: 'Lenovo IdeaPad Flex 5 AMD Ryzen 5 5500U 14" (35.56cm)',
            image: img2,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '56,600',
            cutCost: '60,180',
            rating:'4.2'

        },
        {
            id: '3',
            name: 'Acer Inspiron 3520 Laptop,12th Gen Intel Core i5-1235u',
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            image: img3,
            cost: '57,000',
            cutCost: '65,400',
            rating:'3.8'

        },
        {
            id: '4',
            name: 'ASUS VivoBook 15, Intel Celeron,(4GB RAM, 256GB SSD).',
            image: img4,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '56,410',
            cutCost: '62,480',
            rating:'4.2'

        },
        {
            id: '5',
            name: 'ASUS VivoBook 14, Intel i3 11Gen,(8GB RAM, 256GB SSD).',
            image: img5,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '56,410',
            cutCost: '64,380',
            rating:'4.3'
        }
        ,
        {
            id: '6',
            name: 'Hp 15s  Ryzen 5 (16 GB, 512 GB SSD, Windows 11)',
            image: img6,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '86,410',
            cutCost: '90,400',
            rating:'4.8'
        },
        {
            id: '7',
            name: 'ASUS VivoBook 14, Intel i5 11Gen,(8GB RAM, 1TB SSD).',
            image: img7,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '76,410',
            cutCost: '84,540',
            rating:'4.1'
        },
        {
            id: '8',
            name: 'Lenove Laptop with Intel i3 11Gen,(8GB RAM 256GB SSD).',
            image: img8,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '45,410',
            cutCost: '48,150',
            rating:'4.4'
        },
        {
            id: '9',
            name: 'ASUS VivoBook 15, Ryzen,(8GB RAM, 512GB SSD).',
            image: img9,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '52,410',
            cutCost: '58,450',
            rating:'3.6'
        },
        {
            id: '10',
            name: 'Hp laptop with touch screen(8GB RAM, 512GB SSD).',
            image: img10,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '66,410',
            cutCost: '70,150',
            rating:'4.9'
        },
        {
            id: '11',
            name: 'ASUS with Intel Ryzen 3 5300U,(8GB RAM, 256GB SSD).',
            image: img11,
            cost: '56,410',
            cutCost: '65,480',
            rating:'4.3'
        },
        {
            id: '12',
            name: 'Hp gaming laptop intel i5(8GB RAM, 512GB SSD).',
            image: img12,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '76,410',
            cutCost: '83,380',
            rating:'4.2'
        },
        {
            id: '13',
            name: 'Lenovo ideapad Ryzen 3 (4GB RAM, 256GB SSD).',
            image: img13,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '35,410',
            cutCost: '39,480',
            rating:'3.9'
        },
        {
            id: '14',
            name: 'ASUS Laptop with intel i5 (8GB RAM, 512GB SSD).',
            image: img14,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '56,410',
            cutCost: '60,480',
            rating:'4.6'
        },
        {
            id: '15',
            name: 'ASUS Oled, Touch Screen, Intel i5 11Gen,(8GB RAM, 512GB SSD).',
            image: img15,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '66,410',
            cutCost: '39,480',
            rating:'4.7'
        },
        {
            id: '16',
            name: 'HP 15s Laptop, Ryzen 3 5300u,(8GB RAM, 256GB SSD).',
            image: img16,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '41,510',
            cutCost: '45,480',
            rating:'4.2'
        },
        {
            id: '17',
            name: 'Redmi book, Intel i3 11Gen,(8GB RAM, 256GB SSD).',
            image: img17,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '36,410',
            cutCost: '39,180',
            rating:'3.5'
        },
        {
            id: '18',
            name: 'HP Gaming Laptop intel i7(8GB RAM, 1TB SSD).',
            image: img18,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '86,350',
            cutCost: '99,480',
            rating:'4.8'
        },
        {
            id: '19',
            name: 'Apple Macbook Air with touch (8GB RAM, 256GB SSD).',
            image: img19,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '98,710',
            cutCost: '1,20,480',
            rating:'4.9'
        },
        {
            id: '20',
            name: 'Apple Macbook Pro M1 Chip(16GB RAM, 1TB SSD).',
            image: img20,
            des:  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iusto dolores, distinctio at neque atque? Praesentium quidem repellendus nemo sed natus molestias sunt .',
            cost: '1,56,480',
            cutCost: '1,78,450',
            rating:'4.8'
        }
    ]



    export default laptop_data