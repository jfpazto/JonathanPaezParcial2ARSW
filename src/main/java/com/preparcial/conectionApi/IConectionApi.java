package com.preparcial.conectionApi;

import org.json.JSONObject;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;

public interface IConectionApi {
	
	public JSONObject estadisticasPais(String pais);
	
}
