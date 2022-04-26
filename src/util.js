import * as https from "https"

const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36";

export function getCssFromUrl(url) {
    let content = ""
    
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { "user-agent": userAgent } }, res => {
            res.on("data", data => content += data);
            res.on("end", () => resolve(content));
            res.on("error", reject)
        })
    })
}