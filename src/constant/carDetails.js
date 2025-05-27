import car_detail1 from '../../public/productDetailImg/car_detail1.png'
import car_detail2 from '../../public/productDetailImg/car_detail2.png'
import car_detail3 from '../../public/productDetailImg/car_detail3.png'

function cars(count) {
    const carDetails = []
    for (let index = 0; index < count; index++) {
        carDetails.push({
            id: index + 1,
            car_name: `Nissan GT - R  - ${(index + 1)}`,
            rating: 4,
            review: `440 +`,
            description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
            price: 80.00,
            discount: (index +1) % 2 === 0 ? 25 : 0 ,
            board_title: "Sports car with the best design and acceleration",
            board_desc: 'Safety and comfort while driving a futuristic and elegant sports car',
            car_images: [
                {
                    id: 1,
                    car_id: index + 1,
                    path: car_detail1,
                },
                {
                    id: 2,
                    car_id: index + 1,
                    path: car_detail2,
                },
                {
                    id: 3,
                    car_id: index + 1,
                    path: car_detail3,
                }
            ],
            car_props: [
                {
                    id: 1,
                    car_id: index + 1,
                    key: "Type Car",
                    value: "Sport",
                },
                {
                    id: 2,
                    car_id: index + 1,
                    key: "Capacitiy",
                    value: "2 Person ",
                },
                {
                    id: 3,
                    car_id: index + 1,
                    key: "Steering",
                    value: "Manuel ",
                },
                {
                    id: 4,
                    car_id: index + 1,
                    key: "Gasoline",
                    value: "70L ",
                },
            ],
        })
    }

    return carDetails
}

let carDetails = cars(50)

export default carDetails