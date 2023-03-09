export async function GET(request: Request) {
  return new Response(process.env.API_RESPONSE);
}
