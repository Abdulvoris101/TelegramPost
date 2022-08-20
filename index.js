// DOM

let url = 'https://api.telegram.org/bot5233323938:AAEPjn7XsUOTesQ4Q2I5SdDbLzLKY9iNM5Y/'
let channel_id = '@autopost_uz'


function getAndSendMessage(){
	let message = document.getElementById('message').value
	let text = message

	let sendMessage = `sendMessage?chat_id=${channel_id}&text=${text}`

	fetch(url+sendMessage).then(function(response) {
	  return response.json();
	}).then(function(data) {
	  console.log(data);
	}).catch(function(error) {
	  console.log(error);
	});
	
}




