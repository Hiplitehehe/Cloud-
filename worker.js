addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = 'https://raw.githubusercontent.com/Hiplitehehe/Railway-/main/Kdkd.hhtml';  // Raw URL of your GitHub file
  try {
    // Fetch the HTML content from the GitHub file
    const response = await fetch(url);
    
    // Check if the request was successful (status 200)
    if (response.ok) {
      const htmlContent = await response.text();  // Get the HTML as text
      return new Response(htmlContent, {
        headers: {
          'Content-Type': 'text/html',  // Set the response content type as HTML
        },
      });
    } else {
      return new Response('Error fetching the HTML content', {
        status: 500,
      });
    }
  } catch (error) {
    return new Response('Failed to fetch HTML content: ' + error.message, {
      status: 500,
    });
  }
}
