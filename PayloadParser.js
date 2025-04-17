function parseUplink(device, payload) {
    var parsed = JSON.parse(payload.asString());
    env.log(parsed);
    

    if (parsed[0] && parsed[0].payload && parsed[0].payload.variables) {
        var variables = parsed[0].payload.variables;

        var e1 = device.endpoints.byAddress("1");
        var e2 = device.endpoints.byAddress("2"); 
        var e3 = device.endpoints.byAddress("3"); 
        var e4 = device.endpoints.byAddress("4"); 
        var e5 = device.endpoints.byAddress("5"); 
        var e6 = device.endpoints.byAddress("6"); 
        var e7 = device.endpoints.byAddress("7"); 
        var e8 = device.endpoints.byAddress("8"); 
        var e9 = device.endpoints.byAddress("9"); 
        var e10 = device.endpoints.byAddress("10"); 
        var e11 = device.endpoints.byAddress("11"); 
        var e12 = device.endpoints.byAddress("12"); 
        var e13 = device.endpoints.byAddress("13"); 
        var e14 = device.endpoints.byAddress("14"); 
        var e15 = device.endpoints.byAddress("15"); 
        var e16 = device.endpoints.byAddress("16"); 
        var e17 = device.endpoints.byAddress("17"); 
        var e18 = device.endpoints.byAddress("18"); 
        var e19 = device.endpoints.byAddress("19"); 
        var e20 = device.endpoints.byAddress("20"); 
        var e21 = device.endpoints.byAddress("21"); 
        var e22 = device.endpoints.byAddress("22"); 
        var e23 = device.endpoints.byAddress("23"); 
        var e24 = device.endpoints.byAddress("24"); 
        var e25 = device.endpoints.byAddress("25"); 
        var e26 = device.endpoints.byAddress("26"); 
        var e27 = device.endpoints.byAddress("27"); 
        var e28 = device.endpoints.byAddress("28"); 
        var e29 = device.endpoints.byAddress("29"); 
        var e30 = device.endpoints.byAddress("30"); 
        var e31 = device.endpoints.byAddress("31"); 
        var e32 = device.endpoints.byAddress("32"); 
        var e33 = device.endpoints.byAddress("33"); 
        env.log(variables[0]);

        if (variables[0] != null && e1 != null) {
            e1.updateTemperatureSensorStatus(variables[0].temperatureCelsius1);
            }
        if (variables[0] != null && e2 != null) {
            e2.updateTemperatureSensorStatus(variables[0].temperatureCelsius2); 
            }
        if (variables[0] != null && e3 != null) {
            e3.updateTemperatureSensorStatus(variables[0].temperatureCelsius3);
            }
        if (variables[0] != null && e4 != null) {
            e4.updateTemperatureSensorStatus(variables[0].temperatureCelsius4); 
            }
        if (variables[0] != null && e5 != null) {
            e5.updateTemperatureSensorStatus(variables[0].temperatureCelsius5);
            }
        if (variables[0] != null && e6 != null) {
            e6.updateTemperatureSensorStatus(variables[0].temperatureCelsius6);
            }
        if (variables[0] != null && e7 != null) {
            e7.updateTemperatureSensorStatus(variables[0].temperatureCelsius7);
            }
        if (variables[0] != null && e8 != null) {
            e8.updateTemperatureSensorStatus(variables[0].temperatureCelsius8);
            }
        if (variables[0] != null && e9 != null) {
            e9.updateTemperatureSensorStatus(variables[0].temperatureCelsius9);
            }
        if (variables[0] != null && e10 != null) {
            e10.updateGenericSensorStatus(variables[0].temperatureCelsius10);
            }        
        if (variables[0] != null && e11 != null) {
            e11.updateGenericSensorStatus(variables[0].temperatureCelsius11);
            }
        if (variables[0] != null && e12 != null) {
            e12.updateGenericSensorStatus(variables[0].dato_a1);
            }    
        if (variables[0] != null && e13 != null) {
            e13.updateGenericSensorStatus(variables[0].dato_a2);
            }     
        if (variables[0] != null && e14 != null) {
            e14.updateGenericSensorStatus(variables[0].dato_a3);
            }   
        if (variables[0] != null && e15 != null) {
            e15.updateGenericSensorStatus(variables[0].dato_a4);
            }     
        if (variables[0] != null && e16 != null) {
            e16.updateGenericSensorStatus(variables[0].dato_a5);
            }     
        if (variables[0] != null && e17 != null) {
            e17.updateGenericSensorStatus(variables[0].dato_a6);
            }     
        if (variables[0] != null && e18 != null) {
            e18.updateGenericSensorStatus(variables[0].dato_a7);
            }     
        if (variables[0] != null && e19 != null) {
            e19.updateGenericSensorStatus(variables[0].dato_a8);
            }     
        if (variables[0] != null && e20 != null) {
            e20.updateGenericSensorStatus(variables[0].dato_a9);
            }     
        if (variables[0] != null && e21 != null) {
            e21.updateGenericSensorStatus(variables[0].dato_a10);
            }     
        if (variables[0] != null && e22 != null) {
            e22.updateGenericSensorStatus(variables[0].dato_a11);
            }     
        if (variables[0] != null && e23 != null) {
            e23.updateGenericSensorStatus(variables[0].dato_a12);
            } 
        if (variables[0] != null && e24 != null) {
            e24.updateGenericSensorStatus(variables[0].dato12);
            }
        if (variables[0] != null && e25 != null) {
            e25.updateGenericSensorStatus(variables[0].dato13);
            }
        if (variables[0] != null && e26 != null) {
            e26.updateGenericSensorStatus(variables[0].dato14);
            }
        if (variables[0] != null && e27 != null) {
            e27.updateGenericSensorStatus(variables[0].dato15);
            }
        if (variables[0] != null && e28 != null) {
          e28.updateGenericSensorStatus(variables[0].dato16);
            }
        if (variables[0] != null && e29 != null) {
          e29.updateGenericSensorStatus(variables[0].dato17);
          }
        if (variables[0] != null && e30 != null) {
          e30.updateGenericSensorStatus(variables[0].dato18);
          }
        if (variables[0] != null && e31 != null) {
          e31.updateGenericSensorStatus(variables[0].dato19);
          }
        if (variables[0] != null && e32 != null) {
          e32.updateGenericSensorStatus(variables[0].dato20);
          }
        if (variables[0] != null && e33 != null) {
          e33.updateGenericSensorStatus(variables[0].dato21);
          }
    }

}



function buildDownlink(device, endpoint, command, payload) 
{ 
   payload.buildResult = downlinkBuildResult.ok;
   var obj = { 
                Address: endpoint.address,
                Value:     command.custom.data
                };

   payload.setAsJsonObject(obj); //setAsString(e1);//
   payload.requiresResponse = false; 

}