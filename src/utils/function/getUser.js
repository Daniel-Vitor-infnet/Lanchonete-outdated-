const getUser = () => {
    return JSON.parse(localStorage.getItem("session")).user
    
}

export default getUser;
