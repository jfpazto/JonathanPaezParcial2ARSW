package com.preparcial.services;

import java.util.GregorianCalendar;

import org.javatuples.Pair;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.JsonObject;
import com.preparcial.cache.CacheImpl;
import com.preparcial.conectionApi.ConectionApiImpl;
@Service
public class CovidServices implements ICovidServices {
	@Autowired
	ConectionApiImpl conectionApi;
	@Autowired
	CacheImpl cache;

	@Override
	public JSONObject estadisticaspoPais(String pais) {
		// TODO Auto-generated method stub
		JSONObject objeto=null;
		if(cache.verificaMemoria(pais)==true)
		{
			objeto=cache.traeClima(pais);
			
		}
		else
		{
			objeto=conectionApi.estadisticasPais(pais);
			cache.saveObjects(pais, objeto);;
		}

		return objeto;
		
	}



}
