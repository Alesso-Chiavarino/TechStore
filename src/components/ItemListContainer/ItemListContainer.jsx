const ItemListContainer = ({greeting}) => {
    const styles = {
        color: "#202020",
        fontFamily: "arial",
        fontSize: "25px",
        marginTop: "20px"
    }
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <hr style={{width: "70%", margin: "20px 0"}} />
            <h1 style={styles}> {greeting} </h1>
        </div>
    )
}

export default ItemListContainer;