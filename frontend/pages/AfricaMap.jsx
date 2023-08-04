import MapPage from "../components/MapPage";
import MarkerData from "../components/DataFetch";

export default function DefaultMap() {
    const data = MarkerData();
    return <MapPage location="africa"></MapPage>
}