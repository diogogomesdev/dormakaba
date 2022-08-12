interface film {
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
}

interface Props {
    data: film;
}

export const Film: React.FC<Props> = ({data}) => {

    return(
        <p>Filme</p>
    )
 };