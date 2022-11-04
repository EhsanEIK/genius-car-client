import toast from "react-hot-toast";

export const setAuthToken = user => {

    const currentUser = { currentUser: user?.email };

    // get jwt token
    fetch('https://genius-car-server-rouge.vercel.app/jwt', {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('genius-token', data.token);
            toast.success(`Welcome ${user?.email}`);
        })
}