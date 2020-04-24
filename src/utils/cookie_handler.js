export const getIdFromCookie = cookies => {
    let URL = '';
    let id = -1;
    if(cookies != null) {
        cookies = cookies.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim().split("=");
            if (cookie[0] === "0") {
                id = 0;
            } else if (cookie[0] === "1") {
                id = 1;
            }
            URL = cookie[1]
        }
    }
    return [id, URL]
}

export const createCookie = params => {
    let cookie = ""
    cookie = params["id"] + "=" + params["url"]
    return [cookie];
}