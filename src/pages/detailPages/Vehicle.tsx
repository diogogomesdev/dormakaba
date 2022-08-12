interface vehicle {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string[];
    films: string[];
}

interface Props {
    data: vehicle;
}

export const Vehicle: React.FC<Props> = ({data}) => {

    return(
        <p>Vehicle</p>
    )
 };