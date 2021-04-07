package com.preparcial.cache;

import org.javatuples.Pair;
import org.json.JSONObject;

import com.google.gson.JsonObject;

public interface ICache {
	
	public void saveObjects(String name,  JSONObject objeto);
	public boolean verificaMemoria(String name);
	public JSONObject traeClima(String name);
}
