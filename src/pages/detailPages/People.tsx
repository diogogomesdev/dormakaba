import logo from '../../images/logo.svg';

interface person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
}

interface Props {
    data: person;
}


export const People: React.FC<Props> = ({data}) => {

   return(
        <div className="main">
            <img src={logo} alt="logo" className="logo"/>
            <h1 style={{color:"white"}}>{data.name}</h1>
            <div className="detail_page">
                <div className="detail_page_element">
                    <p className="detailPage_label">Name</p>
                    <p className="detailPage_value">Luke Skywalker</p>
                </div>
                <div className="detail_page_element">
                    <p className="detailPage_label">Skin color</p>
                    <p className="detailPage_value">Fair</p>
                </div>
                <div className="detail_page_element">
                    <p className="detailPage_label">Mass</p>
                    <p className="detailPage_value">77</p>
                </div>
                <div className="detail_page_element">
                    <p className="detailPage_label">Gender</p>
                    <p className="detailPage_value">Male</p>
                </div>
                <div className="detail_page_element">
                    <p className="detailPage_label">Hair color</p>
                    <p className="detailPage_value">Blond</p>
                </div>
                <div className="detail_page_element">
                    <p className="detailPage_label">Eye color</p>
                    <p className="detailPage_value">Blue</p>
                </div>
                <div className="detail_page_element">
                    <p className="detailPage_label">Birth year</p>
                    <p className="detailPage_value">19 BBY</p>
                </div>
                <div className="detail_page_element">
                    <p className="detailPage_label">Height</p>
                    <p className="detailPage_value">172</p>
                </div>
                <div className="detail_page_element">
                    <p className="detailPage_label">Homeworld</p>
                    <p className="detailPage_value">LINK</p>
                </div>
                <div className="detail_page_element">
                    <p className="detailPage_label">Films</p>
                    <p className="detailPage_value">ARRAY LINKS</p>
                </div>
                <div className="detail_page_element">
                    <p className="detailPage_label">Species</p>
                    <p className="detailPage_value">ARRAY LINKS</p>
                </div>
                <div className="detail_page_element">
                    <p className="detailPage_label">Starships</p>
                    <p className="detailPage_value">ARRAY LINKS</p>
                </div>
                <div className="detail_page_element">
                    <p className="detailPage_label">Vehicles</p>
                    <p className="detailPage_value">ARRAY LINKS</p>
                </div>
            </div>
        </div>
   )
};