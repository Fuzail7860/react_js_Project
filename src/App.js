import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  let API = "https://jsonplaceholder.typicode.com/posts";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setData(data);
      }
      console.log("data+++++++++", data);
    } catch (error) {
      console.log("error...!!!", error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          {data.map((curData) => {
            const { userId, id, title, body } = curData;

            return (
              <div
                style={{
                  backgroundColor: "#fff",
                  height: 500,
                  width: 700,
                  alignSelf: "center",
                  color: "black",
                  gap: 20,
                  borderRadius: 10,
                  marginTop: 50,
                }}
                className="cardContainer"
                key={id}
              >
                <img
                  src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                  alt="new"
                  height={300}
                  width={680}
                  style={{ borderRadius: 10, marginTop: 10 }}
                />
                <div>
                  <span style={{fontSize:14,}}>userId : {userId}</span><br/>
                  <span style={{fontSize:14,}}>post id : {id}</span><br/>
                  <span style={{fontSize:14,}}>title : {title}</span>
                  <p style={{fontSize:12,}}>body : {body}</p>
                </div>
              </div>
            );
          })}
        </header>
      </div>
    </>
  );
}

export default App;
