import React, { useState, useEffect } from 'react';

const MyNewComp = () => {
    // const [data1, setData1] = useState(null);
    // const [data2, setData2] = useState(null);

    // useEffect(() => {
    //     // Call the first API
    //     fetch('http://api.example.com/data1')
    //         .then(response => response.json())
    //         .then(data => setData1(data))
    //         .catch(error => console.error(error));

    //     // Call the second API
    //     fetch('http://api.example.com/data2')
    //         .then(response => response.json())
    //         .then(data => setData2(data))
    //         .catch(error => console.error(error));
    // }, []);

    return (
        <div>
            <h1>Data 1:</h1>
            {/* {data1 ? (
                <ul>
                    {data1.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading data 1...</p>
            )}
            <h1>Data 2:</h1>
            {data2 ? (
                <ul>
                    {data2.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading data 2...</p>
            )} */}
        </div>
    );
}

export default MyNewComp;