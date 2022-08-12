interface planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
}

interface Props {
    data: planet;
}

export const Planet: React.FC<Props> = ({data}) => {

    return(
        <p>Planet</p>
    )
 };