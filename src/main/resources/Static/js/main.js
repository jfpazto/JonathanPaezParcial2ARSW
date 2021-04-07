$(document).ready(() => {

	function list()
	{
		$.ajax({
			url: '/api/statics/all',
			type: 'GET',
			dataType: 'json',
			success: function (res) {
	
				let data = '';
				res.forEach(element => {
					data += `
						<tr>
							<td><a href="https://www.w3schools.com">${element.country}</a></td>
							<td>${element.deaths}</td>
							<td>${element.confirmed}</td>
							<td>${element.recovered}</td>
	
						</tr>
	
					`
	
				});
				$('#porpais').html(data);
			}
		})
	}
	function buscar(ciudad){
			console.log(ciudad)
			$.ajax({
				url: "/api/clima/country/London",
				type: 'GET',
				dataType: 'json',
				
				success: function (res) {
					var obj=JSON.stringify(res);
					var o=JSON.parse(obj)
					console.log(o);
					//console.log(o.main.humidity);
					let data = '';
					data += `
					<tr>
						<td>Code Country: ${o.sys.country}</td>
						<td>Humidity: ${o.main.humidity}</td>
						<td>Pressure: ${o.main.pressure}</td>
						<td>Temperature: ${o.main.temp}</td>
						<td>Temperature Max: ${o.main.temp_max}</td>
						<td>Temperature Min: ${o.main.temp_min}</td>

					</tr>
					`
					$('#porpais').html(data);
				}
				
			})
	}

//list();
buscar();
})



