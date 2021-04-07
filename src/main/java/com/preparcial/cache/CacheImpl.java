package com.preparcial.cache;

import java.util.HashMap;

import org.javatuples.Pair;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.google.gson.JsonObject;
@Service
public class CacheImpl implements ICache {
	HashMap <String,JSONObject>map=new HashMap<String,JSONObject>();

	@Override
	public void saveObjects(String name, JSONObject objeto) {
		// TODO Auto-generated method stub
		map.put(name, objeto);
		System.out.println(map);
	}

	@Override
	public boolean verificaMemoria(String name) {
		boolean valor=false;
		if (map.containsKey(name)==true)
		{
			valor=true;
		}
		else
		{
			valor=false;
		}
		return valor;
	}

	@Override
	public JSONObject traeClima(String name) {
		// TODO Auto-generated method stub
		JSONObject clima=map.get(name);
		return clima;
	}

	
}
