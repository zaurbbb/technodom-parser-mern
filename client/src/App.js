import React, {
    useEffect,
    useState
} from "react";
import ViewData from "./components/ViewData/ViewData";

import API from "./api/api";
import SectionLoader from "./components/SectionLoader/SectionLoader";

const App = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await API.get(`/posts`);
            console.log("res.data.length", res.data.length);
            setData(res.data);
        }

        fetchData()
            .then()
            .catch(error => {
                setError(error);
            });
    }, []);

    if (error) return <p>{error.message}</p>;

    if (!data) return <SectionLoader />;

    if (data.length === 0) return <h1>User hasn't detected any Wi-Fi yet</h1>

    console.log("data", data);

    return (
        <ViewData
            data={data}
            setError={setError}
        />
    );
};

export default App;