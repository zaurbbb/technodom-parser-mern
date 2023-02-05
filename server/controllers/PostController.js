import PostService from "../services/PostService.js";

const STORE_URL = "https://www.technodom.kz/astana/catalog";
const technoDomCategories = {
    "laptops": "noutbuki-i-komp-jutery/noutbuki-i-aksessuary/noutbuki",
    "phones": "smartfony-i-gadzhety/smartfony-i-telefony/smartfony",
    "gadgets": "smartfony-i-gadzhety/gadzhety",
    "tablets": "smartfony-i-gadzhety/planshety-i-jelektronnye-knigi/planshety",
    "televisions": "tv-audio-foto-video/televizory",
    "computers": "noutbuki-i-komp-jutery/komp-jutery-i-monitory/stacionarnye-pk",
    "audio": "tv-audio-foto-video/audio-tehnika/akustika",
    "cameras": "fototehnika-i-kvadrokoptery/jekshn-kamery-i-aksessuary",
    "digital": "tv-audio-foto-video/cifrovoe-sputnikovoe-tv",
    "fridges": "bytovaja-tehnika/hranenie-produktov-i-napitkov/holodil-niki",
    "games": "vsjo-dlja-gejmerov/igry-dlja-pristavok/igry-playstation-4",
    "mouses": "noutbuki-i-komp-jutery/komp-juternye-aksessuary/myshi",
    "keyboards": "noutbuki-i-komp-jutery/komp-juternye-aksessuary/klaviatury",
    "cases": "smartfony-i-gadzhety/aksessuary-dlja-telefonov/chehly",
    "mousepads": "noutbuki-i-komp-jutery/komp-juternye-aksessuary/kovriki-dlja-myshi",
    "processors": "noutbuki-i-komp-jutery/komplektujuschie/processory",
    "chairs": "mebel-i-domashnij-inter-er/ofisnaja-mebel/ofisnye-stul-ja-i-kresla",
    "washers": "bytovaja-tehnika/uhod-za-odezhdoj/stiral-nye-mashiny",
    "fens": "krasota-i-zdorov-e/uhod-za-volosami/feny-i-feny-schjotki",
    "microsd": "smartfony-i-gadzhety/aksessuary-dlja-telefonov/karty-pamjati",
    "glasses": "smartfony-i-gadzhety/aksessuary-dlja-telefonov/zaschita-jekrana",
    "ps4 games": "vsjo-dlja-gejmerov/igry-dlja-pristavok/igry-playstation-4",
    "ps5 games": "vsjo-dlja-gejmerov/igry-dlja-pristavok/igry-playstation-5",
    "teapots": "tehnika-dlja-kuhni/prigotovlenie-napitkov/jelektricheskie-chajniki",
    "juicers": "tehnika-dlja-kuhni/prigotovlenie-napitkov/sokovyzhimalki",
    "toasters": "tehnika-dlja-kuhni/kuhonnye-pribory/tostery",
    "blenders": "tehnika-dlja-kuhni/obrabotka-produktov/blendery",
    "mixers": "tehnika-dlja-kuhni/obrabotka-produktov/miksery",
    "meat grinders": "tehnika-dlja-kuhni/obrabotka-produktov/mjasorubki",
    "coffee machines": "tehnika-dlja-kuhni/prigotovlenie-kofe/kofemashiny",
}

class PostController {
    async create() {
        // try {
        //     const post = await PostService.create(req.body);
        //     res.json(post);
        // } catch (e) {
        //     res.status(500).json(e);
        // }
        try {
            const post = await PostService.create(STORE_URL, technoDomCategories);
            console.log("parsing and adding to DB finished");
            return post;
        } catch (e) {
            console.log(e.message);
        }

    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PostController();