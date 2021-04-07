package com.preparcial.conectionApi;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;


@Service
public class ConectionApiImpl implements IConectionApi {



	@Override
	public JSONObject estadisticasPais(String pais) {
		HttpResponse<String> response = null;
		try {
			response = Unirest.get("https://api.openweathermap.org/data/2.5/weather?q="+pais+"&appid=5d3f697405485b0f7fea21917c39ff64")
					.asString();
			return new JSONObject(response.getBody());
		} catch (UnirestException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
		
	}



}
