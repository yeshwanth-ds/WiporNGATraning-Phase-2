
const User = {
    name: "Yeshwanth",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAcCQTp6jMR-GP6N8-lpccALnMtVyeX6LqA&s",
};

 function Comp3() {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>{User.name}</h1>
            <img
                src={User.imgUrl}
                alt="User Profile"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
        </div>
    );
}


export default Comp3;