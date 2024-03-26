import controller from "./controller.js";
import getRequestData from "./utils.js";
import path from "path";
import { log } from "console";

const __dirname = path.resolve();

const router = async (req, res) => {

    switch (req.method) {
        case "GET":
            if (req.url == "/api/tasks") {
                res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
                res.end(JSON.stringify({ status: 200, data: await controller.getall() }))
            } else if (req.url.match(/\/api\/tasks\/([0-9]+)/)) {
                let urlSplit = req.url.split("/")
                let response = await controller.getone(urlSplit[3])

                if (response) {
                    res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
                    res.end(JSON.stringify({ status: 200, data: response }))
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
                    res.end(JSON.stringify({ status: 404, data: `task ${urlSplit[3]} not found` }))
                }

            }
            break;
        case "POST":
            if (req.url == "/api/tasks") {
                let data = await getRequestData(req)

                await controller.add(data)
            }

            break;

    }
}

export default router