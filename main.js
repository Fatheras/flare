const name = "Stanislav";
const quote = "Time is a great teacher, but unfortunately it kills all its pupils";
const worker = "https://aged-shape-ab03.stanislav-r-levchenko.workers.dev/"
const html = ` <script>
   const name = ${name};
   const quote = ${quote};
 </script>
 <script src="${worker}"></script>`
addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

/**
 * Many more examples available at:
 *   https://developers.cloudflare.com/workers/examples
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest(request) {
  let response = new Response();
  // Check for cookie.
  let cookies = request.headers.get('Cookie') || ""
  if (cookies.includes("name") && cookies.includes("quote")) {
    console.log(`name: ${cookie['name']}, quote: ${cookie['quote']}`)
  } else {
    response = new Response(request.body, response)
    response.headers.set("Set-Cookie", `name=${name};qoute: ${quote}`);
    console.log(response);
  }

  return response;
}
