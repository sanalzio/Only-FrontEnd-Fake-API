window.onload = (event) => {
	// window.location.href.split("#")[1].replaceAll("%20", " ").toLowerCase()
	// document.write();
    let inputscon = decodeURI(window.location.href.split("#").slice(1).join("#"));
    let inputs = inputscon.split("\"?");
    let url = inputs[1].replace("url=", "");
    let msg = inputs[0].replace("message=\"", "");

	const message = {
		content: msg,
	};

	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(message),
	})
		.then((response) => {
			if (response.status === 204) {
				document.write("Message sended.");
			} else {
				document.write("Error: "+response.status);
			}
		})
		.catch((error) => {
            document.write("Error: "+error);
		});
	/* let obj;
    data.forEach(tjson => {
        if (tjson["madde"].toLowerCase() == window.location.href.split("#")[1].replaceAll("%20", " ").toLowerCase()) {
            obj = tjson;
        }
    });
	const blob = new Blob([JSON.stringify(obj, null, 2)], {
		type: "application/json",
	});
    window.location.replace(window.URL.createObjectURL(blob)); */
}; //window.location.href.replace()
