import axios from "axios";

const instance=axios.create({
    baseURL:"https://howcanigothere.herokuapp.com/"
});

export default instance;