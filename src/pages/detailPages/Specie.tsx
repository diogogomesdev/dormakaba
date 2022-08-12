
interface specie {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    eye_colors: string;
    hair_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    films: string[];
    people: string[];
}

interface Props {
    data: specie;
}

export const Specie: React.FC<Props> = ({data}) => {

    return(
        <p>Specie</p>
    )
 };