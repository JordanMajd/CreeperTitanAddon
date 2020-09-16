var serverSystem = server.registerSystem(0, 0);

serverSystem.initialize = function () {
  const loggerConf = this.createEventData("minecraft:script_logger_config");
  loggerConf.data.log_errors = true;
  loggerConf.data.log_information = true;
  loggerConf.data.log_warnings = true;
  this.broadcastEvent("minecraft:script_logger_config", loggerConf);

  this.listenForEvent("butts:hello", e => this.onHello(e));
}


let firstTick = true;
serverSystem.update = function () {
  if(firstTick){
    firstTick = false;
    server.log("Server first tick");
  }
}

serverSystem.onHello = function (_e){
  let chatEventData = this.createEventData("minecraft:display_chat_event");
  chatEventData.data.message = "Server Here";
  this.broadcastEvent("minecraft:display_chat_event", chatEventData);
  server.log("server reporting in on hello");
}