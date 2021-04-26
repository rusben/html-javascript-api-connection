// https://www.javascripture.com/FormData
// https://flaviocopes.com/how-to-post-api-javascript/  
// https://developer.mozilla.org/en-US/docs/Web/API/FormData/append

function initFormByPost(formId, url) {
	
	let myForm = document.getElementById(formId);
	
	myForm.onsubmit = function(event) {
		event.preventDefault();
		
		let formData = new FormData(this);
		let data = {};
		
		for (var [key, value] of formData.entries()) {   
		  data[key] = value;
		}

		// Prepare the request
		const xhr = new XMLHttpRequest()
		xhr.withCredentials = false
		
		xhr.addEventListener('readystatechange', function() {
		  if (this.readyState === this.DONE) {
		    console.log(this.responseText)
		  }
		})
		
		xhr.open('POST', url)
		xhr.setRequestHeader('content-type', 'application/json')
		//xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
		
		xhr.send(JSON.stringify(data))
		
		return false;
		
	}
	
}


function initFormFetchPost(formId, url) {
	
	let myForm = document.getElementById(formId);
	
	myForm.onsubmit = function(event) {
		event.preventDefault();
		
		let formData = new FormData(this);
		let data = {};
		
		for (var [key, value] of formData.entries()) {   
		  data[key] = value;
		}

		fetch(url, {
		  method: 'POST',
		  headers: {
		    'content-type': 'application/json',
		    /* authorization: 'Bearer 123abc456def' */
		  },
		  body: JSON.stringify(data)
		})
		  .then(response => {
		    console.log(response)
		  })
		  .catch(err => {
		    console.log(err)
		  });
		
		return false;	
	}

}


(function() {
	// initFormByPost('create-note-form', 'http://localhost:8080/api/notes');
	initFormFetchPost('create-note-form', 'http://localhost:8080/api/notes');
})();
