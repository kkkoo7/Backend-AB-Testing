import {getIdFromCookie, createCookie} from '../utils/cookie_handler'
import ElementHandler from "../utils/html_write_handler";
import {params} from "../utils/config";

export default async request => {
    try {
        let cookies = getIdFromCookie(request.headers.get('Cookie'));
        let variant_id = cookies[0]
        let url = cookies[1]
        if(variant_id === -1){
            const response = await fetch(params["CLOUDFLARE_API"])
            const body = await response.text();
            const data = JSON.parse(body);
            variant_id = Math.round(Math.random());
            url = data.variants[variant_id];
        }
        const htm = await fetch(url);
        const tmp= new HTMLRewriter().on('*', new ElementHandler(variant_id)).transform(htm);

        const resp =  new Response(await tmp.text(),{headers: { 'content-type': 'text/html', 'Set-Cookie' : createCookie({"id": variant_id,"url": url}) },});
        return resp;
    } catch (err) {
        console.log(err)
        const errorText =
            "Unable to show the web page. Please visit after sometime."
        return new Response(errorText)
    }
}