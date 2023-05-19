
const Shimmer = () => {
    return (


        <div className="container">

            <div className="shimmer" >
                {Array(12).fill(" ").map((e, index) => (
                    <div className="shimmerCard" key={index}>
                        <box className="shine"></box>
                        <div className="shimmerLine">
                            <lines className="shine"></lines>
                            <lines className="shine"></lines>
                            <lines className="shine"></lines>
                        </div>
                    </div>
                ))}
            </div>


        </div>

    )
}

export default Shimmer;