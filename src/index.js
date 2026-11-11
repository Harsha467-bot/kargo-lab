export default {
  fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/redirect") return Response.redirect("https://example.com/", 302);
    return new Response(`kargo-lab ${env.BUILD}`);
  },
};
