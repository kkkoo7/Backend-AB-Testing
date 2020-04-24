import Router from "./router";
import api_variant_handler from "./src/handlers/api_variant_handler";

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
	const r = new Router()
	r.get('/', api_variant_handler)
	let response = await r.route(request)
	if (!response) {
		response = new Response('Not found', { status: 404 })
	}
	return response
}
