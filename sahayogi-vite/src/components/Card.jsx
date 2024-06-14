import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Project from "./Project";
import "./Card.css"
const Card = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 2000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const projectData = [
        {
            id: 1,
            imageurl: "/public/rafah.jpg",
            name: "Fund For Gaza",
            cause:
                "To provide families with access to basic necessities like food, clean water, and medical care.Join us in making a difference. It is also associated with people supporting ceasefire.",
        },
        {
            id: 2,
            imageurl: "/public/img2.jpeg",
            name: "Plastic Waste Reduction Campaign",
            cause:
                "Fund campaigns that aim to reduce plastic waste through education, advocacy, and community clean-up events.",
        },
        {
            id: 3,
            imageurl: "/public/img3.jpg",
            name: "Sustainable Fashion Project",
            cause:
                "Launch initiatives that promote sustainable fashion, such as clothing recycling programs or eco-friendly fashion lines.",
        },
        {
            id: 4,
            imageurl: "/public/img4.jpg",
            name: "Green Technology Training Program",
            cause:
                "Create training programs for green technology skills, like solar panel installation, electric vehicle maintenance.",
        },
        {
            id: 5,
            imageurl: "/public/img5.jpg",
            name: "Waste -to- Energy Project",
            cause:
                "Provide a sustainable energy source and reduce landfill waste. Develop projects that convert waste materials into energy, such as biogas plants or waste incineration facilities.",
        },
        {
            id: 6,
            imageurl: "/public/img6.jpg",
            name: "Community Recycling Center",
            cause:
                "Reduce waste, create local jobs, and educate the community about recycling and waste management.",
        },
    ];


    const project = projectData.map((item) => (
        <Project
            key={item.id}
            name={item.name}
            url={item.imageurl}
            cause={item.cause}

        />
    ));

    return (
        <Carousel responsive={responsive}>
            {project}

        </Carousel>
    )
}

export default Card