import needle from "needle";
import cheerio from "cheerio";

export async function technoDomParser(URL, baseURL, category, page = 1, data = []) {
    const res = await needle("get", `${URL}?page=${page}`);
    const $ = cheerio.load(res.body);
    const results = $("li[class=category-page-list__item]");
    results.each(function () {
        let path, title, price;
        path = $(this)
            .find("a.category-page-list__item-link").attr("href");

        title = $(this)
            .find("[class=\"Typography ProductCardV__Title --loading Typography__Body Typography__Body_Bold\"]")
            .text();

        price = $(this)
            .find("[class=\"Typography ProductCardV__Price ProductCardV__Price_WithOld Typography__Subtitle\"]")
            .text()
            .replace(/[^0-9]/g, "");

        if (!price) {
            price = $(this)
                .find("[class=\"Typography ProductCardV__Price Typography__Subtitle\"]")
                .text()
                .replace(/[^0-9]/g, "");
        }

        data.push({
            link: baseURL + path,
            category,
            title,
            price: Number(price)
        });
    });

    if ($(".Paginator__List-Item").length > 0) {
        page++;
        await new Promise(r => setTimeout(r, 2000));
        return technoDomParser(URL, baseURL, category, page, data);
    } else {
        return data;
    }
}