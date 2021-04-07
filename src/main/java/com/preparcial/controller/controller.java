package com.preparcial.controller;

import java.util.Optional;

import org.apache.http.impl.client.BasicResponseHandler;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.preparcial.conectionApi.ConectionApiImpl;
import com.preparcial.services.CovidServices;



@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/api/clima")

public class controller {
	
	@Autowired
	CovidServices apiservice;

    @GetMapping("/country/{country}")
    public String getCasesByCountry(@PathVariable String country) {
    	JSONObject texto=apiservice.estadisticaspoPais(country);
    	//System.out.println(texto.getString("recovered").toString());
    	String objeto=texto.toString();
    	return objeto;
    }

    

    
}
