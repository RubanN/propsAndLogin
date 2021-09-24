export async function verifyLogin({ username, password }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "Ruban" && password === "Ruban@123") {
                resolve()
            } else {
                reject();
            }
        }, 1000)
    })
}