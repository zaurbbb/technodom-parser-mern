import React, {
    useEffect,
    useState
} from "react";
import MainPage from "./components/pages/MainPage/MainPage";

import API from "./api/api";

import SectionLoader from "./components/loader/SectionLoader/SectionLoader";

import './App.css';

const App = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await API.get(`/posts`);
            console.log("num of objects from rest api", res.data.length);
            setData(res.data.sort((a, b) => {
                return a.price - b.price;
            }));
        }

        fetchData()
            .then()
            .catch(error => {
                setError(error);
            });
    }, []);

    if (error) return <p>{error.message}</p>;

    if (!data) return <SectionLoader />;

    if (data.length === 0) return <h1>There's no data</h1>

    return (
        <div className="app">
            <MainPage
                data={data}
                setError={setError}
            />
        </div>
    );
};

export default App;