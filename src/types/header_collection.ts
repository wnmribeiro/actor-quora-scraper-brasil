// headers that can be scraped from initial html response
export type HtmlScrapableHeaders = {
    "Quora-Formkey": string;
};

export type NecessaryHeaders = HtmlScrapableHeaders & {
    Host: "pt.quora.com";
    Origin: "https://pt.quora.com";
    "Content-Type": "application/json";
};
