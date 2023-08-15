import MapPage from "../components/MapPage";
import DataStore from "../components/DataStore";

export default function DefaultMap() {
    const data = DataStore();
    return <MapPage location="australia" data={data}></MapPage>
}