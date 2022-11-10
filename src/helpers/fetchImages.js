import {faker} from "@faker-js/faker";
import loop from "./loop";

const fetchImages = (qty, width, height) => {
    const urlArray = []
    loop(qty, () => {
        const url = faker.image.nature(width, height, true);
        urlArray.push(url);
    });
    return urlArray;
}

export default fetchImages;