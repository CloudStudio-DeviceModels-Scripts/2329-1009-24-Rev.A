function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  endpoints.addEndpoint("1", "Temperatura Agua Fría", endpointType.temperatureSensor);
  endpoints.addEndpoint("2", "Temperatura Retorno ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("3", "Temp. Acum.1 Grupo 1 - Caldera", endpointType.temperatureSensor);
  endpoints.addEndpoint("4", "Temp. Acum.1 Grupo 2 - Caldera", endpointType.temperatureSensor);
  endpoints.addEndpoint("5", "Temperatura Salida Grifos ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("6", "Temp. Acum.2 Grupo 1 - BCA", endpointType.temperatureSensor);
  endpoints.addEndpoint("7", "Temp. Acum.3 Grupo 1 - BCA", endpointType.temperatureSensor);
  endpoints.addEndpoint("8", "Temp. Acum.2 Grupo 2 - BCA", endpointType.temperatureSensor);
  endpoints.addEndpoint("9", "Temp. Acum.3 Grupo 2 - BCA", endpointType.temperatureSensor);
  var s13 = endpoints.addEndpoint("10", "Medición Cloro Aljibe", endpointType.genericSensor);
  s13.variableTypeId = 1404;
  var s14 = endpoints.addEndpoint("11", "Medición pH Aljibe", endpointType.genericSensor);
  s14.variableTypeId = 1405;

  var s1 = endpoints.addEndpoint("12", "Alarma Bomba 1 Primario", endpointType.genericSensor);
  s1.variableTypeId = 1407;
  var s2 = endpoints.addEndpoint("13", "Alarma Bomba 2 Primario", endpointType.genericSensor); 
  s2.variableTypeId = 1407;
  var s3 = endpoints.addEndpoint("14", "Alarma Bomba 1 Secundario", endpointType.genericSensor);
  s3.variableTypeId = 1407;
  var s4 = endpoints.addEndpoint("15", "Alarma Bomba 2 Secundario", endpointType.genericSensor);
  s4.variableTypeId = 1407;
  var s5 = endpoints.addEndpoint("16", "Alarma Bomba 1 Recirculación", endpointType.genericSensor);
  s5.variableTypeId = 1407;
  var s6 = endpoints.addEndpoint("17", "Alarma Bomba 2 Recirculación", endpointType.genericSensor);
  s6.variableTypeId = 1407;
  var s7 = endpoints.addEndpoint("18", "Alarma Equipo Medición Cloro", endpointType.genericSensor);
  s7.variableTypeId = 1408;
  var s8 = endpoints.addEndpoint("19", "Alarma Bomba 1 BCA", endpointType.genericSensor);
  s8.variableTypeId = 1407;
  var s9 = endpoints.addEndpoint("20", "Alarma Bomba 2 BCA", endpointType.genericSensor);
  s9.variableTypeId = 1407;
  var s10 = endpoints.addEndpoint("21", "Alarma Bomba Caldera 1", endpointType.genericSensor);
  s10.variableTypeId = 1407;
  var s11 = endpoints.addEndpoint("22", "Alarma Bomba Caldera 2", endpointType.genericSensor);
  s11.variableTypeId = 1407;
  var s12 = endpoints.addEndpoint("23", "Alarma Seta Emergencias", endpointType.genericSensor);
  s12.variableTypeId = 1409; 

  
}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}