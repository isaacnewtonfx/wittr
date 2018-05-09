self.addEventListener('fetch', function(event) {
	// TODO: respond to all requests with an html response
	// containing an element with class="a-winner-is-me".
	// Ensure the Content-Type of the response is "text/html"
  
	event.respondWith(
		new Response("<span class='a-winner-is-me'>Isaac Newton</span> <b>Here!!!</b>",{
			headers: {'Content-type':'text/Html'}
		})
	);

});